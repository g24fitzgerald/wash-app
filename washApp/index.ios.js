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

import Signup from './pages/Signup';
import Login from './pages/Login';


export default class washApp extends Component {
  render() {
    return (
      <Login />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});

AppRegistry.registerComponent('washApp', () => washApp);
