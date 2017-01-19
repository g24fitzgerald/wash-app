'use strict' //declares that we use strict JavaScript rules. Because ReactNative is a new language we want to use strict JS to leave less room for compiler interpretation
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';

import { firebase, firebaseListToArray } from '../utils/firebase'; //need to use firebaseListToArray
import styles from '../styles/common-styles';
import Dashboard from  './Dashboard'; //so we can navigate back to Dashboard

export default class OrderHistory extends Component {
  constructor(props){
    super(props)
    this.state = {
      orderData: []
      // loading: false,
      // pickupDate: '',
      // pickupTime: '',
      // dropoffDate: '',
      // dropoffTime: '',
    }
  }
  componentWillMount(){ //set up new component when page is going to load with the following properties set.
    const userData = this.props.firebase.auth().currentUser;

      this.props.firebase
      .database()
      .ref('/users/' + userData.uid +'/orders/')
      .on('value', data => {  //.on keeps DB open while we perform firebaseListToArray
        const results = firebaseListToArray(data.val());  //firebaseListToArray function iterates through the firebase payload object, converting it into an array so we can iterate through it
        console.log('order data: ', results); //sanity check

        this.setState({
          orderData: results   //orderData set to the array of order objects
        });
      });

  }
  handleBack(){
    this.props.navigator.pop()
  }
  render() { //map function iterates through the array or ojects, accessing each targeted object value by key using dot notation to format them
    const orderHistory = this.state.orderData.map(order => {
      return (<Text key={ order.id }>
                <Text>{"\n"}</Text>
                <Text>Order number { order.id } {"\n"}</Text>
                <Text>Pickup date: {order.pickupDate} at {order.pickupTime }{"\n"}</Text>
                <Text>Drop off date: {order.dropoffDate} at {order.dropoffTime}{"\n"}</Text>
              </Text>
            )
    });
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Order History</Text>
        { orderHistory.reverse() }
        <TouchableHighlight onPress={this.handleBack.bind(this)} style={styles.transparentButton}>
          <Text style={styles.transparentButtonText}>Back</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const stylesOrder = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
