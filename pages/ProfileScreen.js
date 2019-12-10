import React from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import { firebase } from '@react-native-firebase/auth';



export default class ProfileScreen extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			loggedIn: 0,
			email: '',

		}


	}
	componentDidMount(prevProps, prevState, snapshot) {
		const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				console.log('user logged ' + user)
				this.setState({
					loggedIn: 1,
					email: user.email,
				})
			}
			else if (user == null) {
				console.log('user not logged in ')
			}
		});
	}
	componentWillUnmount()
	{
		const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				console.log('user logged ' + user.email);
				this.setState({
					loggedIn: 1,
				})
			}
			else if (user == null) {
				console.log('user not logged in ')
			}
		});
		unsubscribe();
	}
	

	logOut() {
		const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
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
		unsubscribe();
	}
	renderChange() {
		switch (this.state.loggedIn) {
			case 1:
				return (
					<View style={{flex:2, backgroundColor: 'black', alignContent: 'center', alignItems: 'center'}}>
						<View>
							<Text style={{color: 'white'}}> {this.state.email} </Text>
						</View>
						<TouchableOpacity
							style={styles.button}
							onPress={() => this.logOut()}>
							<Text>LogOut</Text>
						</TouchableOpacity>
					</View>
				)
			case 0:
				return (

					<View style = {{flex: 2, backgroundColor: 'black', alignContent: 'center', alignItems: 'center'}}>
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