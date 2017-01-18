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

import Pickup from './Pickup';
import OrderStatus from './OrderStatus';

export default class Account extends Component {
    componentWillMount(){ //set up new component when page is going to load with the following properties set.
    const userData = this.props.firebase.auth().currentUser;
    
  }
  componentDidMount() {
    this.props.firebase
    .database()
    .ref('/users/' + this.state.uid +'/orders/')
    .once('value')
    .then(function(snapshot) {
     var username = snapshot.val().email;
     console.log
     console.log('QUE',snapshot.val().email)
     console.log('QUE',snapshot.val())
    this.setState({
      loading: false,
      uid: userData.uid,
      firstName: 
      lastName: snapshoot.val().lastName,
      email: '',
      address1: snapshot.val().location.address1,
      address2: '',
      dropoffTime: '',
      specialInstructions: ''
    })

     })


    }

  goToPickup(){
    this.props.navigator.push({
      component: Pickup
    })
  }

  goToOrderStatus(){
    this.props.navigator.push({
      component: OrderStatus
    })
  }
  render() {
          return (
            <View style={styles.view}>
              
                <Image
                source={require('../images/logo_name.png')}
                style={styles.backgroundLogo} />

            </View>
          );
        }
      }

  const styles = StyleSheet.create({
    backgroundLogo: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      maxWidth: 350,
      marginLeft: 30,
      resizeMode: Image.resizeMode.contain,
    },
    backgroundTimer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      maxWidth: 70,
      resizeMode: Image.resizeMode.contain,
    },
    backgroundCalendar: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      maxWidth: 70,
      resizeMode: Image.resizeMode.contain,
    },
    backgroundIcon: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      maxWidth: 100,
      resizeMode: Image.resizeMode.contain,
    },
      container: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
      },
      view: {
        backgroundColor: '#1AAEED',
        flex: 1,
        paddingBottom: 80
      },

      title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#afeeee',
        textAlign: 'center',
        padding: 15
      },
      column: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      },
      dashText: {
        color: '#1AAEED',
        fontSize: 16,
        width: 150,
        textAlign: 'center',
        fontWeight: 'bold'
      },
      transparentButtonText: {
        color: '#1AAEED',
        fontSize: 16,
        width: 150,
        textAlign: 'center',
        fontWeight: 'bold'
      }
  });

AppRegistry.registerComponent('washApp', () => washApp);
