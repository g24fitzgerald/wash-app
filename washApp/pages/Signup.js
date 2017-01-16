'use strict';
import React, { Component } from 'react';

import {
	   AppRegistry,
	   Text,
	   TextInput,
	   View,
	   TouchableHighlight,
	   ActivityIndicator
} from 'react-native';

import Login from './Login';
import ProfileName from './ProfileName'
import styles from '../styles/common-styles.js';

export default class Signup extends Component {

	constructor(props){
		super(props);

		this.state = {
			loading: false,
			email: '',
			password: ''
		};
	}

	signup(){
		this.setState({
			loading: true
		});

		this.props.firebase.auth().createUserWithEmailAndPassword(
			this.state.email,
			this.state.password).then(() => {
				alert('Your account was created!');

				this.setState({
					email: '',
					password: '',
					loading: false
				});
			}).catch((error) => {
				this.setState({
					loading: false
				});
				alert("Account creation failed: " + error.message );
			});
		this.props.navigator.push({
			component: ProfileName
		})
		
	}

	login(){
		this.props.navigator.push({
			component: Login
		});
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
        <TouchableHighlight onPress={this.signup.bind(this)} style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Signup</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.login.bind(this)} style={styles.transparentButton}>
          <Text style={styles.transparentButtonText}>Go to Login</Text>
        </TouchableHighlight>

      </View>;

    // A simple UI with a toolbar, and content below it.
        return (
                <View style={styles.container}>
        			<View style={styles.body}>
          		{content}
        			</View>
      			</View>
                )
  }
}


AppRegistry.registerComponent('Signup', () => Signup);

