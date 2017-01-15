'use strict';
import React, {
	AppRegistry,
	Component,
	Text,
	View,
	TouchableHighlight
} from 'react-native';

export default class button extends Component {

	render(){
		return(
	      <View>
	        <TouchableHighlight underlayColor={"#E8E8E8"} onPress={this.props.onpress} style={this.props.button_styles}>
	          <View>
	              <Text style={this.props.button_text_styles}>{this.props.text}</Text>
	          </View>
	        </TouchableHighlight>
	      </View>

			)
	}


}

AppRegistry.registerComponent('button', () => button);