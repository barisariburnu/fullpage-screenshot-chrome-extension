# Full Page Screenshot

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-green.svg)](https://github.com/barisariburnu/fullpage-screenshot-chrome-extension)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/barisariburnu/fullpage-screenshot-chrome-extension/pulls)
[![GitHub Issues](https://img.shields.io/github/issues/barisariburnu/fullpage-screenshot-chrome-extension.svg)](https://github.com/barisariburnu/fullpage-screenshot-chrome-extension/issues)

> Professional screenshot capture tool for full-page and visible area screenshots with enterprise-grade security.

## ✨ Features

- 📸 **Full-Page Capture** - Capture entire webpages with perfect accuracy
- 🖼️ **Visible Area Capture** - Quick snapshots of your current viewport
- ⌨️ **Keyboard Shortcuts** - Customizable shortcuts for faster workflow
- 🔒 **Privacy First** - Zero data collection, complete privacy
- 💾 **Local Storage** - All screenshots saved directly to your device
- 🚀 **Optimized Performance** - Minimal resource usage, maximum efficiency
- 🌙 **Dark Mode Support** - Built-in theme switcher (Light/Dark/System)

## 📥 Installation

### From Chrome Web Store
1. Visit the Chrome Web Store (link coming soon)
2. Click "Add to Chrome"
3. Accept the required permissions
4. Pin the extension for easy access

### Manual Installation (Development)
1. Clone this repository
```bash
git clone https://github.com/barisariburnu/fullpage-screenshot-chrome-extension.git
cd fullpage-screenshot-chrome-extension
```

2. Open Chrome and navigate to `chrome://extensions`

3. Enable "Developer mode" (toggle in upper-right corner)

4. Click "Load unpacked"

5. Select the cloned repository folder

## 🎯 Usage

### Click Method
1. Click the extension icon in your browser toolbar
2. Choose either:
   - **Full Page** - Captures the entire scrollable page
   - **Visible Area** - Captures only what's currently visible

### Keyboard Shortcuts
- **Full-page screenshot**: `Ctrl+Shift+F` (Mac: `⌘+Shift+F`)
- **Visible area screenshot**: `Ctrl+Shift+V` (Mac: `⌘+Shift+V`)

## 🔐 Security & Privacy

This extension prioritizes your privacy and security:

- ✅ **No data collection** - We don't collect any personal information
- ✅ **No analytics** - No tracking or usage statistics
- ✅ **No external services** - Everything works offline
- ✅ **Local-only storage** - Screenshots saved directly to your device
- ✅ **No internet required** - Works completely offline
- ✅ **Open source** - Full transparency, audit the code yourself

## 🔑 Permissions Explained

The extension requires the following permissions:

| Permission | Purpose |
|------------|---------|
| `activeTab` | Required to capture screenshots of the active browser tab |
| `downloads` | Enables saving screenshots to your local device |
| `debugger` | Essential for full-page screenshot functionality |
| `storage` | Saves your theme preference (light/dark/system) |
| `<all_urls>` | Allows the extension to work on all websites |

## 🛠️ Technical Details

- **Manifest Version**: 3 (latest Chrome extension standard)
- **Screenshot Format**: PNG
- **Quality**: 100% (lossless)
- **File Naming**: `screenshot-[ISO-timestamp].png`
- **Technology**: Vanilla JavaScript, no dependencies

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) first.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Baris Ariburnu**
- GitHub: [@barisariburnu](https://github.com/barisariburnu)
- Email: barisariburnu@gmail.com

## ⭐ Support

If you find this extension helpful, please consider:
- Giving it a ⭐ on GitHub
- Sharing it with others
- Contributing to the project
- Reporting bugs or suggesting features

## 📚 Resources

- [Privacy Policy](privacy-policy.html)
- [Report a Bug](https://github.com/barisariburnu/fullpage-screenshot-chrome-extension/issues)
- [Request a Feature](https://github.com/barisariburnu/fullpage-screenshot-chrome-extension/issues)

## 🙏 Acknowledgments

Built with ❤️ for the developer community. Thanks to all contributors and users!

---

<p align="center">Made with ❤️ by <a href="https://github.com/barisariburnu">Baris Ariburnu</a></p>