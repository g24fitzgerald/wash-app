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

import styles from '../styles/common-styles';
import Dashboard from  './Dashboard'; //so we can navigate back to Dashboard
export default class OrderStatus extends Component {
  constructor(props){
    super(props)
    this.firebaseRef = firebase.database()
    this.state = {
      loading: false,
      pickupDate: '',
      pickupTime: '',
      dropoffDate: '',
      dropoffTime: '',
    }
  }
  componentWillMount(){ //set up new component when page is going to load with the following properties set.
    const userData = this.props.firebase.auth().currentUser;

      this.props.firebase
      .database()
      .ref('/users/' + this.state.uid +'/orders/')
      .once('value') //reads DB once
      .then((snapshot)=> {
       let snap = snapshot.val();
       console.log(snap);
       console.log(snap.pickupTime);
       console.log(snap.dropoffTime);
       this.setState({
        pickupDate: snap.pickupDate,
        pickupTime: snap.pickupTime,
        dropoffDate: snap.dropoffDate,
        dropoffTime: snap.dropoffTime,
      })
    })
  }
  // const renderOrders = this.state.orders.map(todo => {
  //     return(
  //       <li key={todo.key} className="todo-item">
  //         { todo.val }
  //       </li>
  //     )
  //   })
  render() {
    return (
      <Text>Order status</Text>
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
