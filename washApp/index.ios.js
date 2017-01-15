/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict'
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  AsyncStorage
} from 'react-native';

// import { REACT_APP_API_KEY, 
//          REACT_APP_AUTH_DOMAIN, 
//          REACT_APP_DATABASE_URL, 
//          REACT_APP_STORAGE_BUCKET,
//          REACT_APP_MESSAGING_SENDER_ID } from 'react-native-dotenv'

import Signup from './pages/Signup';
import Login from './pages/Login';
import * as firebase from 'firebase'

// import { firebase } from './utils/firebase'

  var config = {
    apiKey: "AIzaSyDKlL_b87lKMuiJ8UxFjTpk9IxoeQPebps",
    authDomain: "washapp-99390.firebaseapp.com",
    databaseURL: "https://washapp-99390.firebaseio.com",
    storageBucket: "washapp-99390.appspot.com",
    messagingSenderId: "706501344486"
  };
  firebase.initializeApp(config);


import styles from './styles/common-styles';

export default class washApp extends Component {



  render(){


      return (

        <Navigator
        initialRoute={{component: Login}}
        configureScene={() => {
          return Navigator.SceneConfigs.FloatFromRight;
        }}
        renderScene={(route, navigator) => {
          if(route.component){
            // Pass the navigator the the component so it can navigate as well.
            // Pass firebaseApp so it can make calls to firebase.
            return React.createElement(route.component, { navigator, firebase});
          }
      }} />

      );

  }

}

AppRegistry.registerComponent('washApp', () => washApp);
