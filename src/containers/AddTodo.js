import React from 'react';
import {StyleSheet , View, Text,TextInput,TouchableOpacity} from 'react-native';
export default class AddTodo extends React.Component {
  
  render() {
    return (
        <View style={{flexDirection:'row',marginHorizontal:20}}>
            <TextInput
                placeholder="Create new vidoso"
                style={{borderWidth:1, borderColor:'#f2f2e1', backgroundColor: '#eaeaea', height: 50, flex:1, padding:5}}
            />
            <TouchableOpacity onPress={() => alert('addedTodo')}>
                <View>
                    <Text>Spausk Cia</Text>
                </View>
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