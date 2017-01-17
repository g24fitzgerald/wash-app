import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import styles from '../styles/common-styles.js';
export default class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'input special instructions here' };
  }
  render() {
    return (
      <TextInput
        style={styles.textInputBox}
        onChangeText={(text) => this.setState({instructions: text})}
        value={this.state.instructions}
        placeholder={"input special instructions"} />
    );
  }
}
