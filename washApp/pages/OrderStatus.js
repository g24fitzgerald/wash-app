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

export default class OrderStatus extends Component {
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
      .on('value', data => {  //.on keeps DB open while it reads contents so we can convert object returned to array
        const results = firebaseListToArray(data.val());  //here we convert the firebase payload object into an array so we can iterate through it
        console.log('order data: ', results); //sanity check

        this.setState({
          orderData: results   //orderData set to the array of order objects
        });
      });

  }
  handleBack(){
    this.props.navigator.pop()
  }
  render() {
    const orderHistory = this.state.orderData.map(order => {
      return (<Text key={ order.id }>
                Pickup date: {order.pickupDate} at {order.pickupTime}
                Drop off date: {order.dropoffDate} at {order.dropoffTime}
              </Text>
            )
    });
    return (
      <View style={styles.container}>
        <Text>Order History</Text>
        { orderHistory.reverse() }
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
