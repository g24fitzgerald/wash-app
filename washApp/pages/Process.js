'use strict' //declares that we use strict JavaScript rules. Because ReactNative is a new language we want to use strict JS to leave less room for compiler interpretation
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
          <Text style={styles.title}>AUSTIN'S PREMIER WASH AND FOLD SERVICE {"\n"}</Text>
          <Text style={styles.header}>OUR PROCESS</Text>
          <Text style={styles.text}>1. Create an account and schedule a pick-up time for any day of the week between 8am to 8pm. {"\n"}{"\n"}
2. Schedule a drop-off time for your freshly washed and folded laundry. {"\n"}{"\n"}
3. Our valet will collect your goods at the requested time and transport to our locally operated facilities. {"\n"}{"\n"}
4. The cleaning attendants will carefully service your clothes and linen under your specific instructions and preferences. {"\n"}{"\n"}
5. Once your order has finished, you will receive a notification, and it will be sent out for delivery at the chosen time. </Text>
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
  title: {
    color: 'black',
    fontSize: 16,
    width: 370,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  },
  header: {
    color: '#1AAEED',
    fontSize: 14,
    width: 370,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text: {
    color: '#1AAEED',
    fontSize: 14,
    width: 350,
    textAlign: 'left',
    marginTop: 10,
    marginRight: 15,
    marginLeft: 15,
  },
});

AppRegistry.registerComponent('washApp', () => washApp);
