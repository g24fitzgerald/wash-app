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
      orders: []
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
      // .once('value') //reads DB once
      // .then((snapshot)=> {  //run this function called snapshot which creates an object snapshot of where you are in tree
      //  let snap = snapshot.val();
      //  let orderData = snap[Object.keys(snap)[0]]; //lets us reach into the only key value pair in the snap object, which is a random number key, with an Object value whose key: value pairs are the order data we want
      //  console.log('snap: ',snap);
      //  console.log('Data pickup', orderData.pickupDate);
      //  })
      //  console.log(snap.dropoffTime);
      //  this.setState({
      //   pickupDate: snap.pickupDate,
      //   pickupTime: snap.pickupTime,
      //   dropoffDate: snap.dropoffDate,
      //   dropoffTime: snap.dropoffTime,
      // })
  }
  handleBack(){
    this.props.navigator.pop()
  }
  render() {
    // const orderHistory = this.state.orderData.map(order => {
    //   return (<View>
    //
    //           </View>
    //         )
    // });
    return (
      // <ul className="orderData">
      //   { orderHistory.reverse() }
      // </ul>
    );
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
