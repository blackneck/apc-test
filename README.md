# APC Technical assignment

## :heavy_exclamation_mark: Setting up the environment
Follow the guide [here](https://reactnative.dev/docs/environment-setup) in the **Installing dependencies** section to have all React Native dependencies installed.
Make sure to select **React Native CLI Quickstart** and then the required development OS and target OS.

## 🚀 Installation

#### Clone repository
```sh
git clone https://github.com/blackneck/apc-test.git
cd apc-test
```
#### Install node modules
```
yarn
```
#### [iOS] Install Pods
```
npx pod-install
```

## 👨‍💻 Running the app
### [iOS] using Xcode
Open `apc-test/ios/apcTest.xcworkspace` file in Xcode. Select the device you want to run the app on and press the 'Run' button :arrow_forward:
### [Android] using Android Studio
Open `apc-test/android` directory in [Android Studio](https://developer.android.com/studio). Select the device you want to run the app on and press the 'Run' button :arrow_forward:
### Optionally using command line
Start the Metro bundler and launch the app using the default simulator or emulator:
#### [iOS]
```
npx react-native run-ios
```
or
```
yarn ios
```
#### [Android]
```
npx react-native run-android
```
or
```
yarn android
```
