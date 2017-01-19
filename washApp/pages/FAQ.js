'use strict' //declares that we use strict JavaScript rules. Because ReactNative is a new language we want to use strict JS to leave less room for compiler interpretation
import React, { Component } from 'react';


import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

export default class FAQ extends Component {
  handleBack(){
    this.props.navigator.pop()
  }

  render() {
    return (

      <View style={styles.container}>
        <Image
        source={require('../images/bubbleBanner.png')}
        style={styles.bubbleBanner} />
        <Text style={styles.text}>
        <Text style={styles.faq1}>1. What services do you provide?</Text>{"\n"}<Text style={styles.faq2}>We offer a full-list of cleaning services, including one-time and repeat, small commercial spaces cleaning, and a bunch of additional services.</Text>{"\n"}{"\n"}
        <Text style={styles.faq1}>2. What's the minimum?</Text>{"\n"}<Text style={styles.faq2}>Yes.  For Wash & Fold orders, the minimum order size is 10 lbs. per bag.</Text>{"\n"}{"\n"}
        <Text style={styles.faq1}>3. What's the turnaround?</Text>{"\n"}<Text style={styles.faq2}>We offer 24-hour turnaround on Wash & Fold for an additional $5.00 fee.
</Text>{"\n"}{"\n"}
        <Text style={styles.faq1}>4. Do you use green products and supplies?</Text>{"\n"}<Text style={styles.faq2}>You bet. We believe in the environment, and we believe in only using cleaning products that are safe and in the best interest of the environment. Being green is a core part of our business’ belief.</Text>{"\n"}{"\n"}
        <Text style={styles.faq1}>5. I’ve never booked a cleaning before. What if I’m not happy?</Text>{"\n"}<Text style={styles.faq2}>Simply put: if you’re not happy, we’re not happy. Whatever it takes, we’ll make it right.
</Text>{"\n"}{"\n"}
        </Text>
        <TouchableHighlight onPress={this.handleBack.bind(this)} style={styles.transparentButton}>
        <Text style={styles.transparentButtonText}>Back</Text>
      </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
    backgroundColor: '#ffffff',
  },

  text: {
    color: '#ffffff',
    fontSize: 14,
    width: 390,
    textAlign: 'left',
    paddingLeft: 30,
    paddingRight: 30
  },

  faq: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '800',
    fontFamily: "Baskerville",
    marginTop: 25
  },

  faq1: {
    color: '#31B8D0',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: "Baskerville",
    marginTop: 25,
    marginBottom: 10,
    paddingBottom: 15,
    textAlign: 'left'
  },

  faq2: {
    color: '#6f6f6f',
  },

  bubbleBanner: {
    height: 150,
    resizeMode: 'contain'
  },
  transparentButtonText: {
    color: '#1AAEED',
    margin: 10,
    padding: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },

});

AppRegistry.registerComponent('washApp', () => washApp);
