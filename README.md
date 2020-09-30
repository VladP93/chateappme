# chateappme

React Native realtime multiuser chat

## To test

### Set-up enviroment

Setting up the development environment [here](https://reactnative.dev/docs/environment-setup)

### Get API KEY

- Go to [Firebase](https://console.firebase.google.com/), create a new project.

- Go to project settings and add a new web application.

- Create [firebase.js] file into src/utils/

- Paste the firebaseConfig var to configure firebase SDK, example:

```
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: '[YOUR_API_KEY]',
  authDomain: '[appname].firebaseapp.com',
  databaseURL: 'https://[appname].firebaseio.com',
  projectId: '[appname]',
  storageBucket: '[appname].appspot.com',
  messagingSenderId: '[Id]',
  appId: '[APP_ID]',
};

export default firebase.initializeApp(firebaseConfig);
```

- Save

### Go to project path and run in terminal

`npm i`

`npx react-native run-android`
