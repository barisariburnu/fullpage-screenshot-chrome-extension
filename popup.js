document.addEventListener('DOMContentLoaded', async () => {
  // Load theme settings
  const { theme = 'system' } = await chrome.storage.sync.get('theme');
  document.getElementById('theme').value = theme;
  applyTheme(theme);

  // Theme change listener
  document.getElementById('theme').addEventListener('change', async (e) => {
    const newTheme = e.target.value;
    await chrome.storage.sync.set({ theme: newTheme });
    applyTheme(newTheme);
  });

  // Full page screenshot
  document.getElementById('captureFullPage').addEventListener('click', async () => {
    const button = document.getElementById('captureFullPage');
    const buttonContent = button.innerHTML;
    button.disabled = true;
    button.innerHTML = `
      <div class="button-content">
        <div class="loading"></div>
        <span>Capturing...</span>
      </div>
    `;

    try {
      const success = await new Promise((resolve) => {
        chrome.runtime.sendMessage({ action: 'captureScreenshot', isFullPage: true }, (response) => {
          resolve(response);
        });
      });

      if (success) {
        showNotification('success', 'Screenshot saved');
      } else {
        throw new Error('Screenshot failed');
      }
    } catch (error) {
      console.error('Screenshot failed:', error);
      showNotification('error', 'Screenshot failed');
    } finally {
      button.disabled = false;
      button.innerHTML = buttonContent;
    }
  });

  // Visible area screenshot
  document.getElementById('captureVisibleArea').addEventListener('click', async () => {
    const button = document.getElementById('captureVisibleArea');
    const buttonContent = button.innerHTML;
    button.disabled = true;
    button.innerHTML = `
      <div class="button-content">
        <div class="loading"></div>
        <span>Capturing...</span>
      </div>
    `;

    try {
      const success = await new Promise((resolve) => {
        chrome.runtime.sendMessage({ action: 'captureScreenshot', isFullPage: false }, (response) => {
          resolve(response);
        });
      });

      if (success) {
        showNotification('success', 'Screenshot saved');
      } else {
        throw new Error('Screenshot failed');
      }
    } catch (error) {
      console.error('Screenshot failed:', error);
      showNotification('error', 'Screenshot failed');
    } finally {
      button.disabled = false;
      button.innerHTML = buttonContent;
    }
  });

  // Update shortcut text for Mac
  if (navigator.platform.includes('Mac')) {
    document.querySelectorAll('.shortcut').forEach(el => {
      el.textContent = el.textContent.replace('Ctrl', '⌘');
    });
  }
});

function applyTheme(theme) {
  if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
}

function showNotification(type, message) {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Listen for messages from background.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'showLoading') {
    const button = document.querySelector(request.command === 'capture_full_page' ? '#captureFullPage' : '#captureVisibleArea');
    if (button) {
      const buttonContent = button.innerHTML;
      button.disabled = true;
      button.innerHTML = request.buttonContent;
      // Store original content for later
      button.dataset.originalContent = buttonContent;
    }
  } else if (request.action === 'hideLoading') {
    const button = document.querySelector(request.command === 'capture_full_page' ? '#captureFullPage' : '#captureVisibleArea');
    if (button) {
      button.disabled = false;
      // Restore original content
      button.innerHTML = button.dataset.originalContent;
      delete button.dataset.originalContent;
    }
  }
}); 