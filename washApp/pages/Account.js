'use strict' //declares that we use strict JavaScript rules. Because ReactNative is a new language we want to use strict JS to leave less room for compiler interpretation
import React, { Component } from 'react';


import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image
} from 'react-native';

import styles from '../styles/common-styles';
import Dashboard from  './Dashboard';

export default class Account extends Component {
    constructor(props) {
      super(props);

       this.state = {
        loading: false,
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: ''
       }
    }

    componentWillMount(){ //set up new component when page is going to load with the following properties set.
    const userData = this.props.firebase.auth().currentUser;

    this.props.firebase
    .database()
    .ref('/users/' + userData.uid)
    .once('value')
    .then((snapshot)=> {
     let snap = snapshot.val();
     console.log(snap)
     console.log(snap.email)
     console.log(snap.location.city)
       this.setState({
        firstName: snap.firstName,
        lastName: snap.lastName,
        email: snap.email,
        phoneNumber: snap.phoneNumber,
        address1: snap.location.address1,
        address2: snap.location.address2,
        city: snap.location.city,
        state: snap.location.state,
        zip: snap.location.zip
       })

     })
    }

  handleBack(){
    this.props.navigator.pop()
  }
  render() {
          return (
            <View style={styles.container}>

            <View style={stylesConfirm.pickupWindow}>
                <Text style={stylesConfirm.confirmationText}>
                { this.state.firstName },
                { this.state.lastName },
                { this.state.email },
                { this.state.phoneNumber },
                { this.state.address1 },
                { this.state.address2 },
                { this.state.city },
                { this.state.state },
                { this.state.zip },

                </Text>

            </View>
              <TouchableHighlight onPress={this.handleBack.bind(this)} style={styles.transparentButton}>
              <Text style={stylesConfirm.transparentButtonText}>Back</Text>
            </TouchableHighlight>



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
  pickupWindow: {
    margin: 20
  },
  confirmationText: {
    color: '#1AAEED',
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
