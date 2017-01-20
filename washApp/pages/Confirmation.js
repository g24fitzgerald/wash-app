'use strict' //declares that we use strict JavaScript rules. Because ReactNative is a new language we want to use strict JS to leave less room for compiler interpretation
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  ScrollView

} from 'react-native';
import Dropoff from './Dropoff';
import Dashboard from './Dashboard';
import styles from '../styles/common-styles';
import TextBox from  '../components/Textbox';
export default class Confirmation extends Component {
  componentWillMount(){ //set up new component when page is going to load with the following properties set.
    const userData = this.props.firebase.auth().currentUser;
    this.setState({
      loading: false,
      uid: userData.uid,
      pickup: '',
      pickupDate: '',
      pickupTime: '',
      dropoff: '',
      dropoffDate: '',
      dropoffTime: '',
      specialInstructions: ''
    })
    console.log(this.props)
  }
  handleSubmit(){
    this.props.firebase.database()
    .ref('/users/'+this.state.uid+'/orders/'+Math.floor(Date.now() / 1000))  //inserts timestamp on handle submit firebase push
    .set({
            pickup: this.props.children.pickup,  //props were inherited from dropoff component
            pickupDate: this.props.children.pickupDate,
            pickupTime: this.props.children.pickupTime,
            dropoff: this.props.children.dropoff,
            dropoffDate: this.props.children.dropoffDate,
            dropoffTime: this.props.children.dropoffTime,
            specialInstructions: this.state.specialInstructions//state was set onChange of text input
          });
    alert('Thanks! Order Confirmed')
    this.props.navigator.push({ //dictates which page the navigator will display next
      component: Dashboard
    })
    console.log(this.props)  //TEST
  }
  handleBack(){
    this.props.navigator.pop();
  }
  render() {
    return (
      <View style={stylesConfirm.container}>
        <Heading label="ORDER CONFIRMATION DETAILS" />
        <Text>{"\n"}{"\n"} </Text>
        <TextInput
          style={stylesConfirm.textInputBox}
          onChangeText={(text) => this.setState({specialInstructions: text})}
          value={this.state.specialInstructions}
          multiline={true}
          placeholder={" Please input any specific instructions:"} />
          <Text>{"\n"} </Text>
        <View style={stylesConfirm.pickupWindow}>
          <Heading label="Pickup"/>
            <Text style={stylesConfirm.confirmationText}>We'll pick it up on { this.props.children.pickupDate } at { this.props.children.pickupTime }{"\n"}{"\n"}</Text>
          <Heading label="Drop Off"/>
            <Text style={stylesConfirm.confirmationText}>We'll drop it off on { this.props.children.dropoffDate } at { this.props.children.dropoffTime }</Text>
        </View>
        <TouchableHighlight onPress={this.handleSubmit.bind(this)} style={stylesConfirm.primaryButton}>
          <Text style={stylesConfirm.primaryButtonText}>Confirm</Text>
        </TouchableHighlight>
          <TouchableHighlight onPress={this.handleBack.bind(this)} style={stylesConfirm.transparentButton}>
          <Text style={stylesConfirm.transparentButtonText}>Back</Text>
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
  },
  textInputBox: {
    marginLeft: 40,
    height: 100,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
  },
  pickupWindow: {
    margin: 20
  },
  confirmationText: {
    color: '#1AAEED',
    fontSize: 16,
  },
  primaryButtonText: {
    backgroundColor: '#1AAEED',
    margin: 10,
    marginTop: 20,
    padding: 15,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  transparentButtonText: {
    color: '#1AAEED',
    margin: 10,
    padding: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});
