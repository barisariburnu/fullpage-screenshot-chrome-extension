# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Prepared project for open-source release
- Enhanced README with badges and better documentation
- Added CONTRIBUTING.md guidelines
- Added comprehensive CHANGELOG.md

### Changed
- Updated LICENSE copyright year to 2025
- Improved code comments (replaced Turkish with English)
- Made extension URL check dynamic using `chrome.runtime.id`

### Fixed
- Fixed incorrect GitHub URL in describe.md

## [1.0.0] - 2025-01-12

### Added
- Full-page screenshot capture functionality
- Visible area screenshot capture functionality
- Keyboard shortcuts support:
  - `Ctrl+Shift+F` (Mac: `⌘+Shift+F`) for full-page capture
  - `Ctrl+Shift+V` (Mac: `⌘+Shift+V`) for visible area capture
- Dark mode support with theme switcher (Light/Dark/System)
- Automatic filename generation with ISO timestamp
- Loading indicators during screenshot capture
- Success/error notifications
- Privacy-first design with zero data collection
- Local-only screenshot storage
- Privacy policy page

### Technical
- Chrome Extension Manifest V3 implementation
- Background service worker for screenshot processing
- Debugger API integration for full-page capture
- Chrome Storage API for theme preference
- Download API for local file saving
- Responsive popup interface with theme support

### Security
- Zero personal data collection
- No external API calls
- No third-party dependencies
- Local-only storage implementation
- Clear permission explanations

### Performance
- Optimized screenshot capture algorithm
- Minimal resource usage
- Fast viewport rendering
- Efficient memory management

---

## Version History

### Release Types

- **Major** (x.0.0): Breaking changes, major new features
- **Minor** (0.x.0): New features, no breaking changes
- **Patch** (0.0.x): Bug fixes, minor improvements

### Upcoming Features

Ideas for future releases:

- [ ] Custom filename patterns
- [ ] Multiple screenshot format support (PNG, JPG, WebP)
- [ ] Screenshot annotation tools
- [ ] Batch screenshot capture
- [ ] Custom keyboard shortcut configuration
- [ ] Screenshot history viewer
- [ ] Cloud storage integration (optional)
- [ ] Screenshot compression options
- [ ] Selection area capture (crop tool)
- [ ] Scrolling element capture
- [ ] Scheduled screenshot capture
- [ ] Screenshot comparison tool

### Support

For questions or issues related to specific versions:
- [Report a Bug](https://github.com/barisariburnu/fullpage-screenshot-chrome-extension/issues)
- [Request a Feature](https://github.com/barisariburnu/fullpage-screenshot-chrome-extension/issues)

---

[Unreleased]: https://github.com/barisariburnu/fullpage-screenshot-chrome-extension/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/barisariburnu/fullpage-screenshot-chrome-extension/releases/tag/v1.0.0
