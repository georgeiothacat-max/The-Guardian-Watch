# GuardianWatch

![GuardianWatch](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-lightgrey)

🛡️ GuardianWatch helps parents monitor online predator contact and preserve evidence for reporting to authorities.

## Features

- ✅ **Real-time Monitoring** - Monitor suspicious online activity across multiple platforms
- ✅ **Alert Dashboard** - View detailed alerts and analyze patterns of predatory behavior
- ✅ **Evidence Export** - Export evidence in legal formats for reporting to authorities
- ✅ **Parent Notifications** - Receive instant notifications of suspicious activity
- ✅ **Browser Extension** - Monitor web activity across browsers
- ✅ **Cross-Platform** - Available for Windows, macOS, and Linux

## Installation

### Windows
1. Download `GuardianWatch-Setup-1.0.0.exe` from [Releases](https://github.com/georgeiothacat-max/The-Guardian-Watch/releases)
2. Run the installer and follow the prompts
3. Launch GuardianWatch from your Start Menu or Desktop

### macOS
1. Download `GuardianWatch-1.0.0.dmg` from [Releases](https://github.com/georgeiothacat-max/The-Guardian-Watch/releases)
2. Open the DMG file
3. Drag GuardianWatch to the Applications folder
4. Launch from Applications

### Linux
1. Download either:
   - `GuardianWatch-1.0.0.AppImage` for universal Linux support
   - `guardian-watch_1.0.0_amd64.deb` for Debian-based systems
2. For AppImage: Make executable and double-click to run
   ```bash
   chmod +x GuardianWatch-1.0.0.AppImage
   ./GuardianWatch-1.0.0.AppImage
   ```
3. For .deb: Install with your package manager
   ```bash
   sudo apt install ./guardian-watch_1.0.0_amd64.deb
   ```

## Development

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Setup
```bash
git clone https://github.com/georgeiothacat-max/The-Guardian-Watch.git
cd The-Guardian-Watch
npm install
```

### Run Development
```bash
npm start
```

### Build Installers
```bash
# Windows
npm run build:win

# macOS
npm run build:mac

# Linux
npm run build:linux

# All platforms
npm run build
```

Built installers will be in the `dist/` directory.

## Releases

**Version 1.0.0** - Initial Release
- Complete Electron app setup
- Express.js backend integration
- Cross-platform support
- Automated CI/CD with GitHub Actions
- Professional UI with modern design

[View All Releases](https://github.com/georgeiothacat-max/The-Guardian-Watch/releases)

## Support

For issues, questions, or to report bugs:
- **Email**: guardianwatch@polsia.app
- **GitHub Issues**: [Report an Issue](https://github.com/georgeiothacat-max/The-Guardian-Watch/issues)

## License

MIT License - See [LICENSE](LICENSE) file for details.

## Security

GuardianWatch implements:
- Context isolation in Electron
- Secure IPC communication
- Sandbox security features
- Input validation and sanitization

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Protect children online. Monitor & Report predatory behavior.**
