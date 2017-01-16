import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import styles from '../styles/common-styles';
import TextBox from  '../components/Textbox';
import button from '../components/Button';

export default class washApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Heading label="Select your pickup date" />
        <TextBox />
        <Heading label="Pickup Time: " />
        <Heading label="Drop Off Time: " />
        <TouchableHighlight style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Confirm Order</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

class Heading extends Component {
  render() {
    return (
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>
          {this.props.label}
        </Text>
      </View>
    );
  }
}
const stylesConfirm = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
