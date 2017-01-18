import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import styles from '../styles/common-styles';
import TextBox from  '../components/Textbox';

export default class Confirmation extends Component {
  componentWillMount(){ //set up new component when page is going to load with the following properties set.
    const userData = this.props.firebase.auth().currentUser;
    this.setState({
      loading: false,
      uid: userData.uid,
      pickup: '',
      pickupDate: '',
      pickupTime: '',
      dropoff: '',
      dropoffDate: '',
      dropoffTime: ''
    })
    console.log(this.props)
  }

  handleSubmit(){
    this.props.firebase.database()
      .ref('/users/'+this.state.uid+'/orders/')  //inserts timestamp on handle submit firebase push
      .push({
            pickup: this.props.children.pickup,
            pickupDate: this.props.children.pickupDate,
            pickupTime: this.props.children.pickupTime,
            dropoff: this.props.children.dropoff,
            dropoffDate: this.props.children.dropoffDate,
            dropoffTime: this.props.children.dropoffTime
          });
      console.log(this.props);
    this.props.navigator.push({
      component: Confirmation
    })
    console.log(this.props)  //TEST
  }
  render() {
    return (
      <View style={styles.container}>
        <Heading label="Confirmation" />
        <TextBox />
        <View style={stylesConfirm.pickupWindow}>
          <Heading label="Pickup Time: " />
          <Heading label="Drop Off Time: " />
        </View>
        <TouchableHighlight onPress={ ()=> this.handleSubmit() } style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Confirm Order</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

class Heading extends Component {
  render() {
    return (
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>
          {this.props.label}
        </Text>
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
  }
});
