#!/bin/bash

# Android Environment Setup Script
echo "Setting up Android environment..."

# Export environment variables
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH="/opt/homebrew/opt/openjdk@17/bin:$PATH:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator"
export JAVA_HOME="/opt/homebrew/opt/openjdk@17"

echo "✅ ANDROID_HOME: $ANDROID_HOME"
echo "✅ JAVA_HOME: $JAVA_HOME"
echo "✅ Java version:"
java -version
echo ""
echo "✅ ADB location:"
which adb
echo ""
echo "Android environment is ready!"
echo "You can now run: npm run android"
