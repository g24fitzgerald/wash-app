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

export default class Home extends Component {
  login(){
    this.props.navigator.push({
      component: Login
    });
  }

  render() {
    return (
      <View style={pageStyles.view}>
          <Image
          source={require('../images/logo_name.png')}
          style={pageStyles.backgroundLogo} />
        <View style={pageStyles.loginIcons}>
          <Image
          source={require('../images/launder_icons.png')}
          style={pageStyles.backgroundIcon} />
        </View>
        <View style={pageStyles.loginHero}>
         <Image
          source={require('../images/skyline.png')}
          style={pageStyles.backgroundImg} />
        <TouchableHighlight onPress={this.login.bind(this)} style={pageStyles.primaryButton}>
          <Text style={pageStyles.primaryButtonText}>LOGIN</Text>
        </TouchableHighlight>
        </View>
        <View style={pageStyles.loginFooter}>
          <Text style={pageStyles.footerText}>How It Works</Text>

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
    maxWidth: 500,
    resizeMode: Image.resizeMode.cover,
  },
  backgroundLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    maxWidth: 350,
    marginLeft: 30,
    resizeMode: Image.resizeMode.stretch,
  },
  backgroundIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    maxWidth: 400,
    resizeMode: Image.resizeMode.cover,
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
  },
  primaryButtonText: {
    backgroundColor: '#1AAEED',
    margin: 10,
    padding: 15,
    color: 'white',
    fontWeight: 'bold'
  }
});

AppRegistry.registerComponent('washApp', () => Home);
