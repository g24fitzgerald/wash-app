'use strict' //declares that we use strict JavaScript rules. Because ReactNative is a new language we want to use strict JS to leave less room for compiler interpretation
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';
import React, {Component} from 'react';
import Signup from './Signup';
import Profile from './Profile';
import ProfileName from './ProfileName'
import styles from '../styles/common-styles.js';
import Dashboard from './Dashboard'

export default class Login extends Component {

  constructor(props){
    super(props);
    // We have the same props as in our signup.js file and they serve the same purposes.
    this.state = {
      loading: false,
      email: '',
      password: ''
    }
  }

  render() {
    // The content of the screen should be inputs for a username, password and submit button.
    // If we are loading then we display an ActivityIndicator.
    const content = this.state.loading ? <ActivityIndicator size="large"/> :
      <View>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({email: text})}
          value={this.state.email}
          placeholder={"Email Address"} />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.password}
          secureTextEntry={true}
          placeholder={"Password"} />
        <TouchableHighlight onPress={this.login.bind(this)} style={pageStyles.primaryButton}>
          <Text style={pageStyles.primaryButtonText}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.goToSignup.bind(this)} style={pageStyles.transparentButton}>
          <Text style={pageStyles.transparentButtonText}>New here?</Text>
        </TouchableHighlight>
      </View>;

    // A simple UI with a toolbar, and content below it.
        return (
                <View style={styles.container}>
                  <View style={styles.body}>
                    {content}
                  </View>
                </View>
                );
  }

  login(){
    this.setState({
      loading: true
    });
    // Log in and display an alert to tell the user what happened.
    console.log("what is ", this.props.firebase.auth())
    this.props.firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password
    ).then((userData) =>
      {
        this.setState({
                loading: false
              });
        this.props.navigator.push({
                component: Dashboard
              });
      }
    ).catch((error) =>
        {
              this.setState({
                loading: false
              });
        alert('Login Failed. Please try again');
    });


  }
  // Go to the signup page
  goToSignup(){
    this.props.navigator.push({
      component: Signup
    });
  }
}

<<<<<<< HEAD
const pageStyles = StyleSheet.create({
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

=======
>>>>>>> c4cf9ba8cf53c7392a9d061957ca2094388dbda6
AppRegistry.registerComponent('Login', () => Login);
