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

import ProfileAddress from './ProfileAddress'
import styles from '../styles/common-styles.js';

export default class ProfileName extends Component {

  constructor(props){
    super(props);

    this.state = {
      loading: false,
      firstName: '',
      lastName: '',
      phoneNumber: ''
    };
  }

  handleSubmit(e){
    this.setState({
      loading: true
    })

    this.props.firebase.database()
      .ref()
      .push({
        firstName: this.state.firstName,
        lastnName: this.state.lastName,
        phoneNumber: this.state.phoneNumber
      }).then(() => {
        this.setState({
          firstName: '',
          lastName: '',
          phoneNumber: '',
          loading: false
        });
      })
    this.props.navigator.push({
      component: ProfileAddress
    })
  }

render() {
    // The content of the screen should be inputs for a username, password and submit button.
    // If we are loading then we display an ActivityIndicator.
    const content = this.state.loading ? <ActivityIndicator size="large"/> :
      <View>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({firstName: text})}
          value={this.state.firstName}
          placeholder={"First Name"} />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({lastName: text})}
          value={this.state.lastName}
          placeholder={"Last Name"} />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({phoneNumber: text})}
          value={this.state.phoneNumber}
          placeholder={"Phone Number"} />        
        <TouchableHighlight onPress={this.handleSubmit.bind(this)} style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Next</Text>
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

