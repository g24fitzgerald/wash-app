'use strict'
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ActivityIndicator
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
              <Text style={styles.title}>Launder This</Text>
              <View style={styles.container}>
                    <View style={styles.row}>
                      <Text style={styles.dashText}>Dashboard Icons</Text>
        <TouchableHighlight onPress={this.goToPickup.bind(this)} style={styles.transparentButton}>
          <Text style={styles.transparentButtonText}>Pickup</Text>
        </TouchableHighlight>
                    </View>
              </View>
            </View>
          );
      }
  }

  const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
      },
      view: {
        backgroundColor: '#1AAEED',
        flex: 1,
        paddingBottom: 50
      },

      title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#afeeee',
        textAlign: 'center',
        padding: 15
      },
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      dashText: {
        color: '#1AAEED',
        fontSize: 16,
        width:150
      }
  });

AppRegistry.registerComponent('washApp', () => washApp);
