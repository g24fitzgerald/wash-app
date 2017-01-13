/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
      <View style={styles.container}>
        <Text>
          WHERE IS OUR LOGO PAUL
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('washApp', () => washApp);
