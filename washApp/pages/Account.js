'use strict' //declares that we use strict JavaScript rules. Because ReactNative is a new language we want to use strict JS to leave less room for compiler interpretation
import React, { Component } from 'react';


import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image
} from 'react-native';

import styles from '../styles/common-styles';
import Profile from './Profile';
import FAQ from './FAQ';
import Payment from './Payment';
import Dashboard from './Dashboard';
import OrderHistory from './OrderHistory';

export default class Account extends Component {


  goToProfile(){
    this.props.navigator.push({
      component: Profile
    })
  }
  goToFAQ(){
    this.props.navigator.push({
      component: FAQ
    })
  }
  goToPayment(){
    this.props.navigator.push({
      component: Payment
    })
  }

  handleBack(){
    this.props.navigator.push({
      component: Dashboard
    })
  }
  render() {
          return (
            <View style={styles.container}>
              <Image
              source={require('../images/app_logo.png')}
              style={stylesConfirm.applogo} />
            <TouchableHighlight onPress={this.goToProfile.bind(this)} >
              <Text style={stylesConfirm.primaryButtonText}>Profile</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.goToFAQ.bind(this)} >
              <Text style={stylesConfirm.primaryButtonText}>FAQ</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.goToPayment.bind(this)} >
              <Text style={stylesConfirm.primaryButtonText}>Payment</Text>
            </TouchableHighlight>
              <TouchableHighlight onPress={this.handleBack.bind(this)} style={styles.transparentButton}>
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
  primaryButtonText: {
    backgroundColor: '#1AAEED',
    margin: 10,
    marginTop: 20,
    padding: 15,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  transparentButtonText: {
    color: '#1AAEED',
    margin: 10,
    padding: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  applogo: {
    marginLeft: 50
  },
  });
