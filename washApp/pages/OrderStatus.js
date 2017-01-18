'use strict' //declares that we use strict JavaScript rules. Because ReactNative is a new language we want to use strict JS to leave less room for compiler interpretation
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { firebase } from '../utils/firebase';
export default class OrderStatus extends Component {
  constructor(props){
    super(props)
    this.firebaseRef = firebase.database().ref('users/').child('users')
    this.state = {
      orders: []
    }
  }
  componentWillMount(){ //set up new component when page is going to load with the following properties set.
    const userData = this.props.firebase.auth().currentUser;
    this.setState({
      loading: false,
      uid: userData.uid,
      // pickupDate: userData.uid,
      // pickupTime: userData.uid,
      // dropoff: '',
      // dropoffDate: '',
      // dropoffTime: '',
    })
    let user= firebase.auth().currentUser;
    console.log('this.firebaseRef', this.firebaseRef);
    console.log("firebase call" + user);
    console.log('this.props.firebase', this.props.firebase);
    console.log( 'this.props.firebase.auth().currentUser',this.props.firebase.auth().currentUser);
    console.log('heres this stuff ', this.props.firebase.database().ref('/users/'+this.state.uid+'/orders/')  );
    console.log('heres the second thing', this.props.firebase.database().ref('/users/'+this.state.uid+'/orders/-KamZUkIHm1ucbHZdFPS'));

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
