# Reflux - React Native Expo App

A React Native application built with Expo, featuring camera functionality, navigation, and cross-platform support.

## Features

- 📱 Cross-platform (iOS, Android, Web)
- 📷 Camera integration with expo-camera
- 🎨 NativeWind (Tailwind CSS for React Native)
- 🚀 Expo Router for navigation
- 📱 Tab-based navigation
- 🎯 TypeScript support

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Run on specific platforms
npm run ios
npm run android
npm run web
```

## Platform Setup

### Android Development

**✅ This app is already configured for Android!**

To run on Android, you need to set up the Android development environment:

1. **Quick option**: Use [Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent) from Google Play Store
2. **Full development**: Follow the [Android Setup Guide](./ANDROID_SETUP.md)

### iOS Development

Requires macOS with Xcode installed. The iOS project is already configured in the `/ios` directory.

### Web Development

Runs in any modern web browser - no additional setup required!

## Development

```bash
# Start with cache reset
npm start -- --clear

# Run linting
npm run lint

# Reset project (if needed)
npm run reset-project
```

## Project Structure

```
├── app/                 # App routes (Expo Router)
├── components/          # Reusable components
├── constants/           # App constants
├── assets/             # Images, fonts, etc.
├── android/            # Android native project
├── ios/                # iOS native project
└── types/              # TypeScript type definitions
```

## Tech Stack

- **Framework**: React Native with Expo
- **Navigation**: Expo Router
- **Styling**: NativeWind (Tailwind CSS)
- **Language**: TypeScript
- **Camera**: expo-camera
- **State Management**: React hooks

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

Private project - All rights reserved.
