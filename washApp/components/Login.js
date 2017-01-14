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
        <View style={styles.loginFooter}><Text>Footer</Text></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerLogin: {
    flex: 6,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  loginTitle: {
    backgroundColor: 'yellow',
    flex: 1
  },
  loginIcons: {
    backgroundColor: 'blue',
    flex: 1
  },
  loginHero: {
    backgroundColor: 'yellow',
    flex: 3
  },
  loginFooter: {
    backgroundColor: 'blue',
    flex: 1
  },
  button: {
  backgroundColor: '#1452E3',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
  },
  buttonText: {
    fontSize: 20
  }
});

AppRegistry.registerComponent('washApp', () => Login);
