import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';



  export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor:'black'}}>


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
    );
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