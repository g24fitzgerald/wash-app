'use strict' //declares that we use strict JavaScript rules. Because ReactNative is a new language we want to use strict JS to leave less room for compiler interpretation
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ActivityIndicator,
  ScrollView,
  Image
} from 'react-native';

import { firebase, firebaseListToArray } from '../utils/firebase'; //need to use firebaseListToArray
import styles from '../styles/common-styles';
import Dashboard from  './Dashboard'; //so we can navigate back to Dashboard

export default class OrderHistory extends Component {
  constructor(props){
    super(props)
    this.state = {
      orderData: []  //instantiate empty array that will hold the firebase payload after it's been covnerted to an array
    }
  }
  componentWillMount(){ //set up new component when page is going to load with the following properties set.
    const userData = this.props.firebase.auth().currentUser;

      this.props.firebase
      .database()
      .ref('/users/' + userData.uid +'/orders/')
      .once('value')
      .then((snapshot)=>{
        let snap = snapshot.val();
        const results = firebaseListToArray(snap);

        this.setState({
          orderData: results
        })
      })

              //the reason you do not want to use .on vs .once in this scenario is because a setState function should only not be pervasive.
              //.on opens the firebase connection indefinately until it is closed, which means the function continues to stay on. .Once means the connection is reopen each time the page is loaded and state set then.
      // this.props.firebase
      // .database()
      // .ref('/users/' + userData.uid +'/orders/')
      // .on('value', data => {  //.on keeps DB open while we perform firebaseListToArray
      //   const results = firebaseListToArray(data.val());  //firebaseListToArray function iterates through the firebase payload object, converting it into an array so we can iterate through it
      //   console.log('order data: ', results); //sanity check

      //   this.setState({
      //     orderData: results   //orderData set to the array of order objects
      //   });
      // });

  }
  handleBack(){
    this.props.navigator.pop()
  }
  render() { //map function iterates through the array or ojects, accessing each targeted object value by key using dot notation to format them
    const orderHistory = this.state.orderData.map(order => {
      return (<Text key={ order.id }>
                <Text>{"\n"}</Text>
                <Text style={pageStyles.order}>Order number: { order.id } {"\n"}</Text>
                <Text style={pageStyles.pickup}>Pickup date: {order.pickupDate} at {order.pickupTime }{"\n"}</Text>
                <Text style={pageStyles.pickup}>Drop off date: {order.dropoffDate} at {order.dropoffTime}{"\n"}</Text>
              </Text>
            )
    });
    return (
      <ScrollView>
      <View style={styles.container}>
      <Image
      source={require('../images/oh_banner.png')}
      style={pageStyles.oh_banner} />
        { orderHistory.reverse() }
        <TouchableHighlight onPress={this.handleBack.bind(this)} style={pageStyles.transparentButton}>
          <Text style={pageStyles.transparentButtonText}>Back</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
    )
  }
};

const pageStyles = StyleSheet.create({

  order: {
    color: 'black',
  },
  pickup: {
    color: '#1AAEED',
  },
  transparentButtonText: {
    color: '#1AAEED',
    margin: 10,
    padding: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  oh_banner: {
    height: 150,
    maxWidth: 355
  },
  });
