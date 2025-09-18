# Android Setup Guide for Reflux App

This app is already configured for Android development! You just need to set up the Android development environment on your machine.

## Quick Start

Your React Native Expo app has been configured with:
- ✅ Android project files in `/android` directory
- ✅ Correct package ID: `com.didadyda.reflux`
- ✅ Camera permissions configured
- ✅ Gradle wrapper ready
- ✅ Build scripts in package.json

## Required Setup

### 1. Install Android Studio

1. **Download Android Studio**: Get it from [developer.android.com/studio](https://developer.android.com/studio)
2. **Run the installer** and follow the setup wizard
3. **During setup, make sure to install**:
   - Android SDK
   - Android SDK Platform
   - Android Virtual Device (AVD)

### 2. Install Android SDK (API Level 34 or higher)

1. Open Android Studio
2. Go to **Tools → SDK Manager**
3. In **SDK Platforms** tab:
   - Check "Android 14.0 (API 34)" or latest
   - Click "Apply" to install
4. In **SDK Tools** tab, ensure these are installed:
   - Android SDK Build-Tools
   - Android Emulator
   - Android SDK Platform-Tools
   - Android SDK Tools

### 3. Set Environment Variables

**For macOS/Linux** (add to `~/.zshrc` or `~/.bash_profile`):
```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

**For Windows** (System Environment Variables):
- `ANDROID_HOME` = `%LOCALAPPDATA%\Android\Sdk`
- Add to PATH: `%LOCALAPPDATA%\Android\Sdk\platform-tools`

**Reload your shell**:
```bash
source ~/.zshrc  # or ~/.bash_profile
```

### 4. Install Java Development Kit (JDK)

**macOS (with Homebrew)**:
```bash
brew install --cask zulu@17
```

**Or download from**: [Azul Zulu JDK 17](https://www.azul.com/downloads/?package=jdk)

### 5. Create Android Virtual Device (Emulator)

1. Open Android Studio
2. Go to **Tools → AVD Manager**
3. Click **Create Virtual Device**
4. Choose a device (e.g., Pixel 7)
5. Download and select a system image (API 34+)
6. Click **Finish**

## Running the App

### Option 1: Using Emulator

1. **Start the emulator**:
   ```bash
   # List available emulators
   emulator -list-avds
   
   # Start specific emulator
   emulator -avd [EMULATOR_NAME]
   ```

2. **Run the app**:
   ```bash
   npm run android
   ```

### Option 2: Using Physical Device

1. **Enable Developer Options** on your Android device:
   - Go to Settings → About phone
   - Tap "Build number" 7 times
   - Go back to Settings → Developer options
   - Enable "USB debugging"

2. **Connect device via USB**

3. **Verify connection**:
   ```bash
   adb devices
   ```

4. **Run the app**:
   ```bash
   npm run android
   ```

### Option 3: Using Expo Go (Simplest)

1. **Install Expo Go** from Google Play Store
2. **Start development server**:
   ```bash
   npm start
   ```
3. **Scan QR code** with Expo Go app

## Troubleshooting

### "adb not found" or "ANDROID_HOME not set"
- Ensure Android SDK is installed
- Verify environment variables are set correctly
- Restart terminal/IDE after setting variables

### Build errors
```bash
# Clean and rebuild
cd android
./gradlew clean
cd ..
npm run android
```

### Port conflicts
```bash
# Kill processes on Metro port
npx react-native start --reset-cache
```

## Development Scripts

Available in `package.json`:
- `npm run android` - Build and run on Android
- `npm run ios` - Build and run on iOS  
- `npm start` - Start Metro bundler
- `npm run web` - Run in web browser

## Next Steps

Once Android SDK is set up:
1. Create/start an emulator or connect a device
2. Run `npm run android`
3. Your app should build and launch!

The app includes:
- Camera functionality (with permissions)
- Navigation with tabs
- NativeWind for styling
- Expo Router for navigation

---

**Need help?** Check the [Expo documentation](https://docs.expo.dev/) or [React Native setup guide](https://reactnative.dev/docs/getting-started).