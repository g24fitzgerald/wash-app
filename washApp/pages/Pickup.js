import React, { Component } from 'react';

import {
  DatePickerIOS,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

import Dropoff from './Dropoff';
import styles from '../styles/common-styles';

export default class DatePickup extends Component {
<<<<<<< HEAD
  static defaultProps = {
    date: new Date(),
    timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
  };
=======

  // constructor(props) {
  //   super(props);
>>>>>>> 3c3cb6bb8aa2d28783360203834fcb5ef99189a6


  state = {
    date: this.props.date,
    timeZoneOffsetInHours: this.props.timeZoneOffsetInHours,
  };

  onDateChange = (date) => {
    this.setState({date: date});
  };

  onTimezoneChange = (event) => {
    var offset = parseInt(event.nativeEvent.text, 10);
    if (isNaN(offset)) {
      return;
    }
    this.setState({timeZoneOffsetInHours: offset});
  };
  componentWillMount() {
    const userData = this.props.firebase.auth().currentUser;
    this.setState({
      loading: false
    })
    this.setState({
      uid: userData.uid
    });
  }

  handleSubmit(){
    this.setState({
      loading: true
    });

      console.log(this.state.date.toLocaleDateString())
      console.log(this.state.date.toLocaleTimeString())
      console.log(this.state.date)

    this.props.firebase.database()
      .ref('/users/'+this.state.uid+'/orders')
      .push({
          pickupDate: this.state.date.toLocaleDateString(),
          pickupTime: this.state.date.toLocaleTimeString(),
          pickup: this.state.date
      })

    this.props.navigator.push({
      component: Dropoff
    })
  }
<<<<<<< HEAD
=======


  static defaultProps = {
    date: new Date(),
    timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
  };

  state = {
    date: this.props.date,
    timeZoneOffsetInHours: this.props.timeZoneOffsetInHours,
  };

  onDateChange = (date) => {
    this.setState({date: date});
  };

  onTimezoneChange = (event) => {
    var offset = parseInt(event.nativeEvent.text, 10);
    if (isNaN(offset)) {
      return;
    }
    this.setState({timeZoneOffsetInHours: offset});
  };

  componentWillMount() {
    const userData = this.props.firebase.auth().currentUser;
    this.setState({
      loading: false
    })
    this.setState({
      uid: userData.uid
    });
  }

  handleSubmit(){
    this.setState({
      loading: true
    });

    this.props.storingPickup();

  }

>>>>>>> 3c3cb6bb8aa2d28783360203834fcb5ef99189a6
  render() {
    // Ideally, the timezone input would be a picker rather than a
    // text input, but we don't have any pickers yet :(
    return (
      <View style={stylesPicker.pickerContainer}>

        <Heading label="Select your pickup date" />
        <DatePickerIOS
          date={this.state.date}
          mode="datetime"
          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
          onDateChange={this.onDateChange}
        />

        <WithLabel label="Pickup Time:">
          <Text>{
            this.state.date.toLocaleDateString() +
            ' ' +
            this.state.date.toLocaleTimeString()
          }</Text>
        </WithLabel>
        <TouchableHighlight onPress={ this.handleSubmit.bind(this) } style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Submit Pickup Time</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

class WithLabel extends Component {
  render() {
    return (
      <View style={stylesPicker.labelContainer}>
        <View style={stylesPicker.labelView}>
          <Text style={stylesPicker.label}>
            {this.props.label}
          </Text>
        </View>
        {this.props.children}
      </View>
    );
  }
}

class Heading extends Component {
  render() {
    return (
      <View style={stylesPicker.headingContainer}>
        <Text style={stylesPicker.heading}>
          {this.props.label}
        </Text>
      </View>
    );
  }
}

exports.displayName = (undefined: ?string);
exports.title = '<DatePickerIOS>';
exports.description = 'Select dates and times using the native UIDatePicker.';
exports.examples = [
{
  title: '<DatePickerIOS>',
  render: function(): React.Element<any> {
    return <DatePickup />;
  },
}];

var stylesPicker = StyleSheet.create({
  pickerContainer: {
    marginTop: 50,
    justifyContent: 'center'
  },
  textinput: {
    height: 26,
    width: 50,
    borderWidth: 0.5,
    borderColor: '#0f0f0f',
    padding: 4,
    fontSize: 13,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  labelView: {
    marginRight: 10,
    paddingVertical: 2,
  },
  label: {
    fontWeight: '500',
  },
  headingContainer: {
    padding: 4,
    backgroundColor: '#f6f7f8',
  },
  heading: {
    fontWeight: '500',
    fontSize: 14,
  },
  primaryButtonText: {
    backgroundColor: '#1AAEED',
    margin: 10,
    padding: 15,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
});
