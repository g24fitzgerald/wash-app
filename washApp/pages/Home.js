import React, { Component } from 'react';


import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';

import Login from './Login';
import styles from '../styles/common-styles.js';

export default class Home extends Component {
  login(){
    this.props.navigator.push({
      component: Login
    });
  }

  render() {
    return (
      <View style={pageStyles.view}>
        <Text style={pageStyles.title}>Launder This</Text>
        <View style={pageStyles.loginIcons}><Text>Icons</Text></View>
        <View style={pageStyles.loginHero}><Text>Hero</Text>
        <TouchableHighlight onPress={this.login.bind(this)} style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Go to Login</Text>
        </TouchableHighlight>
        </View>
        <View style={pageStyles.loginFooter}>
          <Text style={pageStyles.footerText}>How It Works</Text></View>
      </View>
    );
  }
}

const pageStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  view: {
    backgroundColor: '#1AAEED',
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#afeeee',
    textAlign: 'center',
    padding: 15
  },
  loginIcons: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    marginBottom: 10,
  },
  loginHero: {
    backgroundColor: 'white',
    flex: 3,
    alignItems: 'center',
    marginBottom: 10,
  },
  loginFooter: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 25,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    color: '#1AAEED'
  }
});

AppRegistry.registerComponent('washApp', () => Home);
