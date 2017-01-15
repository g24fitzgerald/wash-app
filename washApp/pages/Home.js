import React, { Component } from 'react';


import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.containerLogin}>
        <Text style={styles.loginTitle}>
        Launder This
        </Text>
        <View style={styles.loginIcons}><Text>Icons</Text></View>
        <View style={styles.loginHero}><Text>Hero</Text>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.loginFooter}>
          <Text style={styles.footerText}>How It Works</Text></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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

AppRegistry.registerComponent('washApp', () => Login);
