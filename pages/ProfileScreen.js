import React from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

import { firebase } from '@react-native-firebase/auth';


  
  export default class ProfileScreen extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
			loggedIn: 0
		}
		
	}
	componentDidMount()
	{
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
			  console.log('user logged '+user)
			  this.setState({
					loading: true,
					loggedIn: 1
				})
			}
			else if (user==null)
			{
				console.log('user not logged in ')
			}
		 });
	}
	componentWillUnmount()
	{

	}
	logOut()
	{
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				console.log('signing out')
				firebase.auth().signOut();

				this.setState({
					loggedIn: 0,
				}) 
			} else {
				console.log('No user to sign out')
			}
		  });
	}
	renderChange()
	{
		switch(this.state.loggedIn)
		{
			case 1:
				return(
					<View style={{     backgroundColor: 'black',}}>
							<TouchableOpacity
								style={styles.button}
								onPress={() => this.logOut()}>
								<Text>LogOut</Text>
							</TouchableOpacity>
					</View>
				)			
			case 0:
				return(
						<View>
							<TouchableOpacity
								style={styles.button}
								onPress={() => this.props.navigation.navigate('Login')}>
								<Text>Login</Text>
							</TouchableOpacity>
			
							<TouchableOpacity
								style={styles.button}
								onPress={() => this.props.navigation.navigate('Register')}>
								<Text>Registration</Text>
							</TouchableOpacity>
						</View>
				)
		}
	}
  render() {
    return (this.renderChange());
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});