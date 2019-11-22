import React from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default class LoginScreen extends React.Component {
  render() {
    return (
        <View style={ styles.container}>


            <View style={styles.form}>
                <View>
                    <View style={styles.credentialBox}>
                        <View style={{marginHorizontal:15}}>
                            <Ionicons name="ios-mail" size={35} color="darkgray" />
                        </View>
                        <TextInput style={styles.input} autoCapitalize="none" placeholder="Email">
                        </TextInput>
                    </View>
                </View>
                <View>
                    <View style={styles.credentialBox}>
                        <View style={{marginHorizontal:15}}>
                            <Ionicons name="ios-lock" size={35} color="darkgray" />
                        </View>
                        <TextInput style={styles.input} secureTextEntry autoCapitalize="none" placeholder="Password" >
                        </TextInput>
                    </View>

                </View>
                <View style={{marginTop:30,alignContent:'center',alignItems:'center'}}>
                    <TouchableOpacity style={styles.button}>
                            <Text>
                                Log in
                            </Text>
                        </TouchableOpacity>
                </View>
                <View style={{marginTop:5,alignContent:'center',alignItems:'center'}}>
                    <TouchableOpacity style={styles.button}>
                            <Text>
                                Forgot password?
                            </Text>
                        </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')} style={{marginTop:5,alignContent:'center',alignItems:'center'}}>
                    <Text style={{color:'white'}}>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>



        </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'black',
    },
    loginText:{
        marginTop:32,
        fontSize:18,
        fontWeight:"400",
        textAlign:"center",
        height: 72,
    },
    form:{
        marginVertical:150,
        marginBottom: 48,
        marginHorizontal: 30,
    },
    credentialBox:{
        flexDirection: 'row',
        marginVertical: 10,
        borderRadius:5,
        height:45,
        backgroundColor: "gray",
    },
    inputTitle:{
        color: "#8A8F9E",
        fontSize:15,
        textTransform: "uppercase",
    },
    input:{
        borderBottomColor:"#8A8F9E",
        borderBottomWidth:StyleSheet.hairlineWidth,
        height:40,
        fontSize:15,
        color: "#161F3D"
    },
    button:{
        marginVertical:10,
        marginHorizontal: 30,
        backgroundColor: "gray",
        height: 45,
        borderRadius:20,
        width:150,
        alignItems: "center",
        justifyContent: "center",
    },
    person:{
        alignItems: "center",
        justifyContent: "center",
    },

  });