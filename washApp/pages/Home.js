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
      <View style={pageStyles.containerLogin}>
        <Text style={pageStyles.loginTitle}>
        Launder This
        </Text>
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
  containerLogin: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  loginTitle: {
    backgroundColor: '#1AAEED',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: 375,
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 10,

  },
  loginIcons: {
    backgroundColor: '#37D4D4',
    flex: 1,
    width: 375,
    alignItems: 'center',
    marginBottom: 10,

  },
  loginHero: {
    backgroundColor: 'yellow',
    flex: 3,
    width: 375,
    alignItems: 'center',
    marginBottom: 10,

  },
  loginFooter: {
    backgroundColor: '#1AAEED',
    flex: 1,
    width: 375,
    alignItems: 'center',


  },
  button: {
  backgroundColor: 'white',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  maxHeight: 10,


  },

  buttonText: {
  fontSize: 20,
  color: 'black'
  },

  footerText: {
    fontSize: 25,
    alignItems: 'flex-start',
    justifyContent: 'flex-end'

  }

});

AppRegistry.registerComponent('washApp', () => Home);
