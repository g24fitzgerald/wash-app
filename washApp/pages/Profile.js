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
import Account from './Account'

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
        zip: '',
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
    const userData = this.props.firebase.auth().currentUser;
    this.props.firebase.database()
    .ref('/users/'+userData.uid)
    .update({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNumber: this.state.phoneNumber
          });
    this.props.firebase.database()
    .ref('/users/'+userData.uid+'/location/')
    .update({
            address1: this.state.address1,
            address2: this.state.address2,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
              });

  alert('Profile Updated!')
    this.props.navigator.push({ //dictates which page the navigator will display next
      component: Profile
    })
  }

  handleBack(){
    this.props.navigator.push({
      component: Account
    })
  }
  render() {
          return (
            <View style={styles.container}>

              <View style={pageStyles.name}>
                <View>
                  <Text style={pageStyles.fontSM}> First Name</Text>
                  <TextInput
                    style={this.state.style}
                    onChangeText={(text) => this.setState({firstName: text})}
                    value={ this.state.firstName }
                    placeholder={this.state.firstName}/>

                  <Text style={pageStyles.fontSM}> Last Name</Text>
                  <TextInput
                    style={pageStyles.textInput}
                    onChangeText={(text) => this.setState({lastName: text})}
                    value={ this.state.lastName }
                    placeholder={ this.state.lastName } />

                  <Text style={pageStyles.fontSM}> Email</Text>
                  <TextInput
                    style={pageStyles.textInput}
                    value={ this.state.email }
                    placeholder={this.state.email}/>

                  <Text style={pageStyles.fontSM}> Phone Number </Text>
                  <TextInput
                    style={pageStyles.textInput}
                    onChangeText={(text) => this.setState({phoneNumber: text})}
                    value={ this.state.phoneNumber }
                    placeholder={ this.state.phoneNumber } />

                  <Text style={pageStyles.fontSM}> Address 1 </Text>
                  <TextInput
                    style={pageStyles.textInput}
                    onChangeText={(text) => this.setState({address1: text})}
                    value={ this.state.address1 }
                    placeholder={ this.state.address1 } />

                  <Text style={pageStyles.fontSM}> Address 2 </Text>
                  <TextInput
                    style={pageStyles.textInput}
                    onChangeText={(text) => this.setState({address2: text})}
                    value={ this.state.address2 }
                    placeholder={ this.state.address2 } />

                  <Text style={pageStyles.fontSM}> City </Text>
                  <TextInput
                    style={pageStyles.textInput}
                    onChangeText={(text) => this.setState({city: text})}
                    value={ this.state.city }
                    placeholder={ this.state.city } />

                  <Text style={pageStyles.fontSM}> State </Text>
                  <TextInput
                    style={pageStyles.textInput}
                    onChangeText={(text) => this.setState({state: text})}
                    value={ this.state.state }
                    placeholder={ this.state.state } />

                  <Text style={pageStyles.fontSM}> Zip </Text>
                  <TextInput
                    style={pageStyles.textInput}
                    onChangeText={(text) => this.setState({zip: text})}
                    value={ this.state.zip }
                    placeholder={ this.state.zip } />

                </View>
                </View>

            <TouchableHighlight onPress={this.handleSubmit.bind(this)} style={pageStyles.primaryButton}>
              <Text style={pageStyles.primaryButtonText}>Edit</Text>
            </TouchableHighlight>
              <TouchableHighlight onPress={this.handleBack.bind(this)} style={pageStyles.transparentButton}>
              <Text style={pageStyles.transparentButtonText}>Back</Text>
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
    fontSize: 12
  },

  textInput: {
    height: 30,
    width: 150,
    borderColor: '#1AAEED',
    borderWidth: 1,
    margin: 2,
    fontSize: 16
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
