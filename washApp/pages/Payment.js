'use strict' //declares that we use strict JavaScript rules. Because ReactNative is a new language we want to use strict JS to leave less room for compiler interpretation
import React, { Component } from 'react';


import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import Dashboard from './Dashboard';

export default class washApp extends Component {
  handleBack(){
    this.props.navigator.push({
      component: Dashboard
    })
  }
  render() {
    return (
      <View style={stylesConfirm.container}>
        <Text>
      PAYMENT -> Mike and Dirk need your $$$
        </Text>
        <TouchableHighlight onPress={this.handleBack.bind(this)} style={stylesConfirm.transparentButton}>
        <Text style={stylesConfirm.transparentButtonText}>Back to Dashboard</Text>
      </TouchableHighlight>
      </View>
    );
  }
}

const stylesConfirm = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    },
  transparentButtonText: {
    color: '#1AAEED',
    margin: 10,
    padding: 15,
    fontWeight: 'bold',
    textAlign: 'center'
    },
  });
