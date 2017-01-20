# wash-app
## Launder This
***Copyright © 2017***

Pickup and Drop-off laundry mobile app using ReactNative that employs Firebase with Auth0 sign in.

***Authors: Gina Fitzgerald, Paul Lizama, Vin Luu, Dan Nguyen***


## Installing Dependencies
You will need Node.js, Watchman, the React Native command line interface, and Xcode.

### Node, Watchman
We recommend installing Node and Watchman using Homebrew. Run the following commands in a Terminal after installing Homebrew:
Run the following command in a Terminal:
``` javascript
brew install node
brew install watchman
```
Watchman is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance.

### The React Native CLI #
Node.js comes with npm, which lets you install the React Native command line interface.

Run the following command in a Terminal:
``` javascript
npm install -g react-native-cli
```
If you get an error like Cannot find module 'npmlog', try installing npm directly:
```javascript
curl -0 -L http://npmjs.org/install.sh | sudo sh.
```

### Xcode
The easiest way to install Xcode is via the Mac App Store. Installing Xcode will also install the iOS Simulator and all the necessary tools to build your iOS app.

Now you can begin your project with the CLI command
```javascript
react-native init AppName
```
Open the main folder in you preferred editor (here we use atom)
```javascript
atom AppName
```

### Build and Run
To build a React Native project, run the following command:
```javascript
react-native run-ios
```

### Firebase Setup
React Native manages dependencies through npm. To install Firebase, run the following command at the root of the project.
```javascript
npm install firebase --save
```
Then right above the component, initialize Firebase with your config values:
```javascript
const firebaseConfig = {
  apiKey: "<your-api-key>",
  authDomain: "<your-auth-domain>",
  databaseURL: "<your-database-url>",
  storageBucket: "<your-storage-bucket>",,
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
```
Helpful resources:

https://firebase.googleblog.com/2016/01/the-beginners-guide-to-react-native-and_84.html

https://facebook.github.io/react-native/docs/getting-started.html
