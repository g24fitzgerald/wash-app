'use strict' //declares that we use strict JavaScript rules. Because ReactNative is a new language we want to use strict JS to leave less room for compiler interpretation
import React, { Component } from 'react';


import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class washApp extends Component {
  render() {
    return (

      <View style={styles.container}>
        <Image
        source={require('../images/faqBubbles.png')}
        style={styles.faqBubbles} />
        <Text style={styles.text}>
        <Text style={styles.faq1}>1. What services do you provide?</Text>{"\n"}<Text style={styles.faq2}>We offer a full-list of cleaning services, including one-time and repeat, small commercial spaces cleaning, and a bunch of additional services.</Text>{"\n"}{"\n"}
        <Text style={styles.faq1}>2. What's the minimum?</Text>{"\n"}<Text style={styles.faq2}>Yes.  For Wash & Fold orders, the minimum order size is 10 lbs. per bag.</Text>{"\n"}{"\n"}
        <Text style={styles.faq1}>3. What's the turnaround?</Text>{"\n"}<Text style={styles.faq2}>We offer 24-hour turnaround on Wash & Fold for an additional $5.00 fee.
</Text>{"\n"}{"\n"}
        <Text style={styles.faq1}>4. Do you use green products and supplies?</Text>{"\n"}<Text style={styles.faq2}>You bet. We believe in the environment, and we believe in only using cleaning products that are safe and in the best interest of the environment. Being green is a core part of our business’ belief.</Text>{"\n"}{"\n"}
        <Text style={styles.faq1}>5. I’ve never booked a cleaning before. What if I’m not happy?</Text>{"\n"}<Text style={styles.faq2}>Simply put: if you’re not happy, we’re not happy. Whatever it takes, we’ll make it right.
</Text>{"\n"}{"\n"}
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
    backgroundColor: '#ffffff',
  },

  text: {
    color: '#ffffff',
    fontSize: 14,
    width: 350,
    textAlign: 'left',
    padding: 25
  },

  faq: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '800',
    fontFamily: "Baskerville",
    marginTop: 25
  },

  faq1: {
    color: '#1AAEED',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: "Baskerville",
    marginTop: 25,
    marginBottom: 10,
    paddingBottom: 15,
    textAlign: 'left'


  },
  faq2: {
    color: 'gray',
    textAlign: 'left'
  },

  faqBubbles: {
    maxWidth: 1000,
    resizeMode: 'cover'
  }


});

AppRegistry.registerComponent('washApp', () => washApp);
