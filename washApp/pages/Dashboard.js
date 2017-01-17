'use strict'
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

import Pickup from './Pickup'

export default class washApp extends Component {

  goToPickup(){
        this.props.navigator.push({
      component: Pickup
    })
  }

  render() {
          return (
            <View style={styles.view}>
                <Image
                source={require('../images/logo_name.png')}
                style={styles.backgroundLogo} />
              <View style={styles.container}>
                <Image
                source={require('../images/timer.png')}
                style={styles.backgroundTimer} />
                <Text style={styles.dashText}>Order Status</Text>
                <Image
                source={require('../images/calendar.png')}
                style={styles.backgroundCalendar} />
                <TouchableHighlight onPress={this.goToPickup.bind(this)} style={styles.transparentButton}>
                  <Text style={styles.transparentButtonText}>Schedule Pickup</Text>
                </TouchableHighlight>
                <Image
                source={require('../images/account_icon.png')}
                style={styles.backgroundIcon} />
                <Text style={styles.dashText}>Account</Text>
                    <View style={styles.column}>
                    </View>
              </View>
            </View>
          );
        }
      }

  const styles = StyleSheet.create({
    backgroundLogo: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      maxWidth: 350,
      marginLeft: 30,
      resizeMode: Image.resizeMode.contain,
    },
    backgroundTimer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      maxWidth: 70,
      resizeMode: Image.resizeMode.contain,
    },
    backgroundCalendar: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      maxWidth: 70,
      resizeMode: Image.resizeMode.contain,
    },
    backgroundIcon: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      maxWidth: 70,
      resizeMode: Image.resizeMode.contain,
    },
      container: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
      },
      view: {
        backgroundColor: '#1AAEED',
        flex: 1,
        paddingBottom: 80
      },

      title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#afeeee',
        textAlign: 'center',
        padding: 15
      },
      column: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      },
      dashText: {
        color: '#1AAEED',
        fontSize: 16,
        width: 150,
        textAlign: 'center',
        fontWeight: 'bold'
      },
      transparentButtonText: {
        color: '#1AAEED',
        fontSize: 16,
        width: 150,
        textAlign: 'center',
        fontWeight: 'bold'
      }
  });

AppRegistry.registerComponent('washApp', () => washApp);
