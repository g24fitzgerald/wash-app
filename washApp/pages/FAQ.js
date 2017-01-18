'use strict' //declares that we use strict JavaScript rules. Because ReactNative is a new language we want to use strict JS to leave less room for compiler interpretation
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
        <Text >
        FAQ
        </Text>
        <Text style={styles.text}>1. Create an account and schedule a pick-up time for any day of the week between 8am to 8pm. {"\n"}{"\n"}
2. Schedule a drop-off time for your freshly washed and folded laundry. {"\n"}{"\n"}
3. Our valet will collect your goods at the requested time and transport to our locally operated facilities. {"\n"}{"\n"}
4. The cleaning attendants will carefully service your clothes and linen under your specific instructions and preferences. {"\n"}{"\n"}
5. Once your order has finished, you will receive a notification, and it will be sent out for delivery at the chosen time. </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1AAEED',
  },
});

AppRegistry.registerComponent('washApp', () => washApp);
