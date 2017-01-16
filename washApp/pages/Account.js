// 'use strict';
// import React, { Component } from 'react';

// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   AsyncStorage
// } from 'react-native';

// import Button from '../components/Button';
// import Header from '../components/Header';

// import Login from './Login';

// import styles from '../styles/common-styles.js';

// import firebase from '../utils/firebase'
// import { REACT_APP_API_KEY, 
//          REACT_APP_AUTH_DOMAIN, 
//          REACT_APP_DATABASE_URL, 
//          REACT_APP_STORAGE_BUCKET,
//          REACT_APP_MESSAGING_SENDER_ID } from 'react-native-dotenv'

// let app = new firebase("washapp-99390.firebaseapp.com")

// export default class account extends Component {

//   constructor(props){

//     super(props);
//     this.state = {
//       loaded: false,
//     }

//   }

//   componentWillMount(){

//     AsyncStorage.getItem('user_data').then((user_data_json) => {
//       let user_data = JSON.parse(user_data_json);
//       this.setState({
//         user: user_data,
//         loaded: true
//       });
//     });

//   }

//   render(){

//     return (
//       <View style={styles.container}>
//         <Header text="Account" loaded={this.state.loaded} />  
//         <View style={styles.body}>
//         {
//           this.state.user &&
//             <View style={styles.body}>
//               <View style={page_styles.email_container}>
//                 <Text style={page_styles.email_text}>{this.state.user.password.email}</Text>
//               </View>
//               <Image
//                 style={styles.image}
//                 source={{uri: this.state.user.password.profileImageURL}}
//               />
//               <Button
//                   text="Logout"
//                   onpress={this.logout.bind(this)}
//                   button_styles={styles.primary_button}
//                   button_text_styles={styles.primary_button_text} />
//             </View>
//         }
//         </View>
//       </View>
//     );
//   }

//   logout(){

//     AsyncStorage.removeItem('user_data').then(() => {    
//       app.unauth();
//       this.props.navigator.push({
//         component: Login
//       });
//     });

//   }

// }

// const page_styles = StyleSheet.create({
//   email_container: {
//     padding: 20
//   },
//   email_text: {
//     fontSize: 18
//   }
// });