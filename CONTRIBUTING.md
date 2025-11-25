# Contributing to Full Page Screenshot

Thank you for your interest in contributing to Full Page Screenshot! This document provides guidelines and instructions for contributing.

## 🌟 Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors.

## 🐛 Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include as many details as possible:

### Bug Report Template

```markdown
**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**
 - OS: [e.g., Windows 10, macOS 13]
 - Chrome Version: [e.g., 120.0.6099.109]
 - Extension Version: [e.g., 1.0.0]

**Additional context**
Add any other context about the problem here.
```

## 💡 Suggesting Features

Feature suggestions are welcome! Please create an issue with the following information:

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
A clear and concise description of what the problem is.

**Describe the solution you'd like**
A clear and concise description of what you want to happen.

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions or features you've considered.

**Additional context**
Add any other context or screenshots about the feature request here.
```

## 🔧 Development Setup

### Prerequisites

- Google Chrome or Chromium-based browser
- Git
- Code editor (VS Code recommended)

### Setup Instructions

1. **Fork the repository**
   
   Click the "Fork" button at the top right of the repository page.

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/fullpage-screenshot-chrome-extension.git
   cd fullpage-screenshot-chrome-extension
   ```

3. **Create a branch**
   ```bash
   git checkout -b feature/my-new-feature
   ```

4. **Load the extension in Chrome**
   - Open Chrome and navigate to `chrome://extensions`
   - Enable "Developer mode" (toggle in upper-right corner)
   - Click "Load unpacked"
   - Select the project directory

5. **Make your changes**
   
   Edit the code and test your changes in Chrome.

6. **Test thoroughly**
   - Test on different websites
   - Test both full-page and visible area captures
   - Test keyboard shortcuts
   - Test theme switching
   - Check for console errors

## 📝 Coding Guidelines

### JavaScript Style

- Use ES6+ features
- Use `const` and `let` instead of `var`
- Use async/await instead of callbacks where possible
- Add comments for complex logic
- Follow existing code style

### File Structure

```
fullpage-screenshot-chrome-extension/
├── manifest.json          # Extension configuration
├── background.js          # Background service worker
├── popup.html            # Popup interface
├── popup.js              # Popup logic
├── privacy-policy.html   # Privacy policy page
├── images/               # Extension icons
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── README.md
├── LICENSE
├── CONTRIBUTING.md
└── CHANGELOG.md
```

### Commit Messages

Write clear and descriptive commit messages:

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests when relevant

Examples:
```
✅ Good:
- Add dark mode support to popup
- Fix screenshot capture on Chrome special pages
- Improve error handling in background.js

❌ Bad:
- updated stuff
- bug fix
- changes
```

## 🔄 Pull Request Process

1. **Update documentation**
   
   Update the README.md or other documentation with details of changes, if applicable.

2. **Update the CHANGELOG**
   
   Add your changes to the "Unreleased" section in CHANGELOG.md.

3. **Test your changes**
   
   Ensure all functionality works as expected.

4. **Create a Pull Request**
   
   - Go to your fork on GitHub
   - Click "New Pull Request"
   - Select your branch
   - Fill in the PR template with details about your changes

### Pull Request Template

```markdown
**Description**
Brief description of what this PR does.

**Type of Change**
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

**How Has This Been Tested?**
Describe the tests you ran to verify your changes.

**Checklist:**
- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have tested this on multiple websites
```

5. **Wait for review**
   
   A maintainer will review your PR and may request changes.

6. **Address feedback**
   
   Make any requested changes and push them to your branch.

7. **Merge**
   
   Once approved, your PR will be merged!

## 🧪 Testing

### Manual Testing Checklist

- [ ] Full-page screenshot works on various websites
- [ ] Visible area screenshot works correctly
- [ ] Keyboard shortcuts function properly
- [ ] Theme switching works (Light/Dark/System)
- [ ] Extension icon displays correctly
- [ ] No console errors
- [ ] Works on Chrome special pages (shows appropriate error)
- [ ] Screenshots save with correct filename format
- [ ] Extension doesn't leak memory

### Test Websites

Test your changes on different types of websites:
- Regular websites (e.g., GitHub, Wikipedia)
- Long scrolling pages
- Pages with fixed headers/footers
- Single-page applications
- Websites with lazy loading

## 📦 Release Process

(For maintainers)

1. Update version in `manifest.json`
2. Update CHANGELOG.md
3. Create a git tag: `git tag -a v1.0.1 -m "Release v1.0.1"`
4. Push tags: `git push --tags`
5. Create GitHub release
6. Package extension for Chrome Web Store

## 💬 Questions?

If you have questions, feel free to:
- Open an issue with the "question" label
- Contact the maintainer at barisariburnu@gmail.com

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Thank You!

Your contributions help make this project better for everyone. Thank you for taking the time to contribute!
