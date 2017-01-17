import React, { Component } from 'react';


import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image
} from 'react-native';

export default class washApp extends Component {
  render() {
    return (
      <View style={styles.view}>
          <Image
          source={require('../images/process.png')}
          style={styles.backgroundLogo} />
        <View style={styles.container}>
          <Text style={styles.header}>OUR PROCESS</Text>

          <Text style={styles.text}>1. Create an account and schedule a pick-up time any day of the week from 8am to 8pm. {"\n"}{"\n"}
2. Schedule a drop-off time for your freshly washed and folded laundry. {"\n"}{"\n"}
3. Our valet will collect your goods at the scheduled time and transport to our CT Laundry facility. {"\n"}{"\n"}
4. The cleaning attendants will carefully service your goods under your specific instructions and preferences. {"\n"}{"\n"}
5. Once your order has finished, it will be sent out for delivery at the chosen time. </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3,
    maxWidth: 380,
    marginRight: 10,
    marginTop: 20,
    resizeMode: Image.resizeMode.contain,
  },
  view: {
    backgroundColor: 'white',
    flex: 1,
    paddingBottom: 80
  },
  container: {
    flex: 3,
  },
  header: {
    color: '#1AAEED',
    fontSize: 16,
    width: 370,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
  },
  text: {
    color: '#1AAEED',
    fontSize: 14,
    width: 350,
    textAlign: 'left',
    fontWeight: 'bold',
    marginTop: 10,
    marginRight: 15,
    marginLeft: 15,
  },
});

AppRegistry.registerComponent('washApp', () => washApp);
