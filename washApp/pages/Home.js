'use strict' //declares that we use strict JavaScript rules. Because ReactNative is a new language we want to use strict JS to leave less room for compiler interpretation
import React, { Component } from 'react';


import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image
} from 'react-native';

import Login from './Login';
import styles from '../styles/common-styles.js';
import Signup from './Signup';
import Process from './Process';

export default class Home extends Component {
  login(){
    this.props.navigator.push({
      component: Login
    });
  }
  goToSignup(){
    this.props.navigator.push({
      component: Signup
    });
  }
  ourProcess(){
    this.props.navigator.push({
      component: Process
    });
  }
  render() {
    return (
      <View style={pageStyles.view}>
          <Image source={require('../images/logo_name.png')} style={pageStyles.backgroundLogo} />
        <View style={pageStyles.loginIcons}>
          <Image source={require('../images/launder_icons.png')} style={pageStyles.backgroundIcon} />
        </View>
        <View style={pageStyles.loginHero}>
         <Image source={require('../images/skyline.png')} style={pageStyles.backgroundImg} />
        </View>
         <View style={pageStyles.loginSignup}>
        <TouchableHighlight onPress={this.login.bind(this)} style={pageStyles.primaryButton}>
          <Text style={pageStyles.primaryButtonText}>LOGIN</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.goToSignup.bind(this)} style={pageStyles.primaryButton}>
          <Text style={pageStyles.signUp}>SIGN UP</Text>
        </TouchableHighlight>
        </View>
        <View style={pageStyles.loginFooter}>
          <TouchableHighlight onPress={this.ourProcess.bind(this)} style={pageStyles.primaryButton}>
          <Text style={pageStyles.footerText}>How This Works</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const pageStyles = StyleSheet.create({
  backgroundImg: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    maxWidth: 800,
    // resizeMode: Image.resizeMode.cover,
  },
  backgroundLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    maxWidth: 375,
    marginTop: 15
  },
  backgroundIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
    maxWidth: 385,
    // resizeMode: Image.resizeMode.cover,
  },
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
  loginSignup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  loginFooter: {
    backgroundColor: '#1AAEED',
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
    color: 'white',
    textAlign: 'center',
    marginTop: 30,
    fontStyle: 'italic'
  },
  primaryButtonText: {
    backgroundColor: '#1AAEED',
    margin: 15,
    padding: 15,
    color: 'white',
    fontWeight: 'bold',
    borderWidth: 5,
    borderColor: 'white',
    textAlign: 'center',
    marginTop: 10,
    paddingBottom: 4,
  },
  signUp: {
    backgroundColor: '#1AAEED',
    margin: 15,
    padding: 15,
    color: 'black',
    fontWeight: 'bold',
    borderWidth: 5,
    borderColor: 'white',
    textAlign: 'center',
    marginTop: 10,
    paddingBottom: 4,
  }
});

AppRegistry.registerComponent('Home', () => Home);
