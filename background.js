// Listen for messages from popup.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'captureScreenshot') {
    chrome.tabs.query({ active: true, currentWindow: true }, async ([tab]) => {
      if (!tab) {
        console.error('No active tab found');
        sendResponse({ success: false, error: 'No active tab found' });
        return;
      }

      // Cannot capture screenshots on Chrome special pages
      if (tab.url.startsWith('chrome://') || tab.url.startsWith(`chrome-extension://${chrome.runtime.id}/`)) {
        sendResponse({ success: false, error: 'Cannot capture screenshot of this page type' });
        return;
      }

      try {
        await captureScreenshot(tab, request.isFullPage);
        sendResponse({ success: true });
      } catch (error) {
        console.error('Screenshot failed:', error.message || error);
        sendResponse({ success: false, error: error.message || 'Screenshot failed' });
      }
    });
    return true; // Keep the message channel open
  }
});

// Listen for keyboard shortcuts
chrome.commands.onCommand.addListener(async (command) => {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab) throw new Error('No active tab found');

    // Show loading in popup if open
    const loadingContent = `
      <div class="button-content">
        <div class="loading"></div>
        <span>Capturing...</span>
      </div>
    `;
    chrome.runtime.sendMessage({
      action: 'showLoading',
      command,
      buttonContent: loadingContent
    }).catch(() => { }); // Ignore error if popup is closed

    await captureScreenshot(tab, command === 'capture_full_page');

    // Hide loading in popup if open
    chrome.runtime.sendMessage({
      action: 'hideLoading',
      command
    }).catch(() => { }); // Ignore error if popup is closed
  } catch (error) {
    console.error('Screenshot failed:', error);
    // Hide loading in popup if open
    chrome.runtime.sendMessage({
      action: 'hideLoading',
      command
    }).catch(() => { });
  }
});

// Handle screenshot capture
async function captureScreenshot(tab, isFullPage = false) {
  const target = { tabId: tab.id };
  let debuggerAttached = false;

  try {
    // Attach debugger silently
    await new Promise((resolve, reject) => {
      chrome.debugger.attach(target, '1.3', () => {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
        } else {
          debuggerAttached = true;
          resolve();
        }
      });
    });

    // Enable necessary domains
    await new Promise((resolve, reject) => {
      chrome.debugger.sendCommand(target, 'Page.enable', {}, (result) => {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
        } else {
          resolve(result);
        }
      });
    });

    // Get page metrics
    const metrics = await new Promise((resolve, reject) => {
      chrome.debugger.sendCommand(target, 'Page.getLayoutMetrics', (result) => {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
        } else {
          resolve(result);
        }
      });
    });

    if (!metrics || !metrics.contentSize) {
      throw new Error('Failed to get page metrics');
    }

    if (isFullPage) {
      // Set viewport to full page size for full page screenshot
      await new Promise((resolve, reject) => {
        chrome.debugger.sendCommand(target, 'Emulation.setDeviceMetricsOverride', {
          width: Math.ceil(metrics.contentSize.width),
          height: Math.ceil(metrics.contentSize.height),
          deviceScaleFactor: 1,
          mobile: false
        }, (result) => {
          if (chrome.runtime.lastError) {
            reject(new Error(chrome.runtime.lastError.message));
          } else {
            resolve(result);
          }
        });
      });

      // Wait for layout to stabilize
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    // Capture screenshot
    const screenshot = await new Promise((resolve, reject) => {
      chrome.debugger.sendCommand(target, 'Page.captureScreenshot', {
        format: 'png',
        quality: 100,
        fromSurface: true,
        optimizeForSpeed: false,
        captureBeyondViewport: isFullPage
      }, (result) => {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
        } else {
          resolve(result);
        }
      });
    });

    if (!screenshot || !screenshot.data) {
      throw new Error('Failed to capture screenshot data');
    }

    // Reset viewport if needed
    if (isFullPage) {
      await new Promise((resolve) => {
        chrome.debugger.sendCommand(target, 'Emulation.clearDeviceMetricsOverride', {}, () => resolve());
      });
    }

    // Generate filename with timestamp
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `screenshot-${timestamp}.png`;

    // Download screenshot
    await new Promise((resolve, reject) => {
      chrome.downloads.download({
        filename,
        url: `data:image/png;base64,${screenshot.data}`
      }, (downloadId) => {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
        } else {
          resolve(downloadId);
        }
      });
    });
  } catch (error) {
    throw error;
  } finally {
    // Detach debugger only if it was successfully attached
    if (debuggerAttached) {
      try {
        await new Promise(resolve => chrome.debugger.detach(target, () => resolve()));
      } catch (error) {
        console.warn('Failed to detach debugger:', error);
      }
    }
  }
}