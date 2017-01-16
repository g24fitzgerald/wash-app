import React, { Component } from 'react';
import { TextInput, View } from 'react-native';

export default class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'input special instructions here' };
  }

  render() {
    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1, placeholderTextColor:'gray'} }
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}
