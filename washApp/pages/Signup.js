'use strict' //declares that we use strict JavaScript rules. Because ReactNative is a new language we want to use strict JS to leave less room for compiler interpretation
import React, { Component } from 'react';

import {
	   AppRegistry,
	   Text,
	   TextInput,
	   View,
		 StyleSheet,
	   TouchableHighlight,
		 Image,
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

				this.setState({
					email: '',
					password: '',
					loading: false
				});

        this.props.navigator.push({
          component: ProfileName
    })
			}).catch((error) => {
				this.setState({
					loading: false
				});
				alert("Account creation failed: " + error.message );
			});


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
        <TouchableHighlight onPress={this.signup.bind(this)} style={pageStyles.primaryButton}>
          <Text style={pageStyles.primaryButtonText}>Sign Up</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.login.bind(this)} style={pageStyles.transparentButton}>
          <Text style={pageStyles.transparentButtonText}>Go to Login</Text>
        </TouchableHighlight>

      </View>;

    // A simple UI with a toolbar, and content below it.
        return (
					<View style={styles.container}>
					<Image
					source={require('../images/app_logo.png')}
					style={pageStyles.applogo} />
						<View style={styles.body}>
							{content}
						</View>
					</View>
					);
  }
}

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
	applogo: {
    marginLeft: 50
  },

});

AppRegistry.registerComponent('Signup', () => Signup);
