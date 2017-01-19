'use strict' //declares that we use strict JavaScript rules. Because ReactNative is a new language we want to use strict JS to leave less room for compiler interpretation
import React, { Component } from 'react';

import {
     AppRegistry,
     Text,
     TextInput,
     View,
     TouchableHighlight,
     ActivityIndicator,
     StyleSheet
} from 'react-native';

import ProfileName from './ProfileName'
import Dashboard from './Dashboard'
import styles from '../styles/common-styles.js';

export default class ProfileAddress extends Component {

  constructor(props){
    super(props);

    this.state = {
      loading: false,
      user: '',
      uid: '',
      email: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: ''
    };
  }

  componentWillMount() {
    const userData = this.props.firebase.auth().currentUser;

    this.setState({
      email: userData.email,
      uid: userData.uid
    });
  }

  handleSubmit(e){
    this.setState({
      loading: true
    })

    this.props.firebase.database()
      .ref('/users/'+this.state.uid+'/location')
      .set({
        address1: this.state.address1,
        address2: this.state.address2,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip
      })
    this.props.navigator.push({
      component: Dashboard
    })
  }

render() {
    // The content of the screen should be inputs for a username, password and submit button.
    // If we are loading then we display an ActivityIndicator.
    const content = this.state.loading ? <ActivityIndicator size="large"/> :
      <View>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({address1: text})}
          value={this.state.address1}
          placeholder={" Address"} />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({address2: text})}
          value={this.state.address2}
          placeholder={" Suite"} />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({city: text})}
          value={this.state.city}
          placeholder={" City"} />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({state: text})}
          value={this.state.state}
          placeholder={" State"} />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({zip: text})}
          value={this.state.zip}
          placeholder={" Zip"} />
        <TouchableHighlight onPress={this.handleSubmit.bind(this)} style={pageStyles.primaryButton}>
          <Text style={pageStyles.primaryButtonText}>Next</Text>
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
});

AppRegistry.registerComponent('ProfileAddress', () => ProfileAddress);
