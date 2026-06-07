# GuardianWatch v1.0.0 Build Trigger

To trigger the automated builds for all platforms, run:

```bash
bash trigger-release.sh
```

Or manually create the tag:

```bash
git tag v1.0.0 -m "Release v1.0.0 - GuardianWatch Desktop App"
git push origin v1.0.0
```

## What This Does

Pushing the `v1.0.0` tag will automatically trigger GitHub Actions to:

1. **Build Windows** - Creates `.exe` installer and portable executable
2. **Build macOS** - Creates `.dmg` and `.zip` packages
3. **Build Linux** - Creates `.AppImage` and `.deb` packages
4. **Release** - Uploads all builds to GitHub Releases

## Monitor Progress

- **Actions Page**: https://github.com/georgeiothacat-max/The-Guardian-Watch/actions
- **Releases Page**: https://github.com/georgeiothacat-max/The-Guardian-Watch/releases

Builds typically complete in 15-30 minutes.
