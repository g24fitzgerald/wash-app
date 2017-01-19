'use strict' //declares that we use strict JavaScript rules. Because ReactNative is a new language we want to use strict JS to leave less room for compiler interpretation
import React, { Component } from 'react';


import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image,
  ListView
} from 'react-native';

import styles from '../styles/common-styles';

export default class Profile extends Component {
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

  handleSubmit(){
    this.props.navigator.push({
      component: Pickup
    })
  }

  handleBack(){
    this.props.navigator.pop()
  }
  render() {
          return (
            <View style={styles.container}>

              <View style={pageStyles.name}>
                <View>
                  <Text style={pageStyles.fontSM}> First Name</Text>
                  <TextInput
                    style={pageStyles.textInput}
                    value={ this.state.firstName }
                    placeholder={this.state.firstName}/>
                </View>
                <View>
                  <Text style={pageStyles.fontSM}> Last Name</Text>
                  <TextInput
                    style={pageStyles.textInput}
                    value={ this.state.lastName }
                    placeholder={ this.state.lastName } />
                </View>


                  <Text style={pageStyles.fontSM}> Email</Text>
                  <TextInput
                    style={pageStyles.textInput}
                    value={ this.state.email }
                    placeholder={this.state.email}/>

                  <Text style={pageStyles.fontSM}> Phone Number </Text>
                  <TextInput
                    style={pageStyles.textInput}
                    value={ this.state.phoneNumber }
                    placeholder={ this.state.phoneNumber } />



                <Text style={pageStyles.confirmationText}>
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









            <TouchableHighlight onPress={this.handleSubmit.bind(this)} style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Edit</Text>
            </TouchableHighlight>
              <TouchableHighlight onPress={this.handleBack.bind(this)} style={styles.transparentButton}>
              <Text style={styles.transparentButtonText}>Back</Text>
            </TouchableHighlight>



            </View>
          );
        }
      }

  const pageStyles = StyleSheet.create({

  name: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

  },

  fontSM: {
    fontSize: 8
  },

  textInput: {
    height: 30,
    width: 150,
    borderColor: '#1AAEED',
    borderWidth: 1,
    margin: 2,
    fontSize: 15
  },

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

AppRegistry.registerComponent('Profile', () => Profile);
