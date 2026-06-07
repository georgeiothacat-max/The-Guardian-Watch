#!/bin/bash
# Trigger the release workflow for The-Guardian-Watch

echo "🚀 Triggering GuardianWatch v1.0.0 Release Build"
echo "=================================================="

# Configure git
git config user.name "GitHub Actions"
git config user.email "actions@github.com"

# Create and push the tag
git tag v1.0.0 -m "Release v1.0.0 - GuardianWatch Desktop App

Features:
- Real-time monitoring
- Alert dashboard
- Evidence export
- Parent notifications
- Cross-platform support (Windows, macOS, Linux)"

git push origin v1.0.0

echo ""
echo "✅ Release tag v1.0.0 created and pushed!"
echo ""
echo "🏗️  GitHub Actions workflows are now building:"
echo "   ✓ Windows installer (.exe)"
echo "   ✓ macOS application (.dmg)"
echo "   ✓ Linux executable (.AppImage and .deb)"
echo ""
echo "📊 Monitor progress at:"
echo "   https://github.com/georgeiothacat-max/The-Guardian-Watch/actions"
echo ""
echo "📦 Downloads will be available at:"
echo "   https://github.com/georgeiothacat-max/The-Guardian-Watch/releases/tag/v1.0.0"
