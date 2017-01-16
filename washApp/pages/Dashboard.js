import React, { Component } from 'react';


import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class washApp extends Component {

  render() {
          return (
            <View style={styles.view}>
              <Text style={styles.title}>Launder This</Text>
              <View style={styles.container}>
                    <View style={styles.row}>
                      <Text style={styles.dashText}>Dashboard Icons</Text>
                      
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
        backgroundColor: '#afeeee',
        flex: 1,
        paddingBottom: 50
      },

      title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#1e90ff',
        textAlign: 'center',
        padding: 15
      },
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      dashText: {
        color: '#1e90ff',
        fontSize: 16,
        width:150
      }
  });

AppRegistry.registerComponent('washApp', () => washApp);
