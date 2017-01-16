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
      PAYMENT -> NEEDS TO BE DIRKS BALD PHASE PHOTO
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
  }
});

AppRegistry.registerComponent('washApp', () => washApp);
