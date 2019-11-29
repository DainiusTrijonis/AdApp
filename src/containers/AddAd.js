import React from 'react';
import {StyleSheet , View,TextInput,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {addAd} from '../actions/index'

class AddAd extends React.Component {
  state = {
    text: '',
    price: ''
  }
  addAd = ( text,price ) =>
  {
    this.props.dispatch(addAd(text,price));
    this.setState({ text:'',price:''});
  }
  render() {
    return (
        <View style={{flexDirection:'row',marginHorizontal:20}}>
            <TextInput
                onChangeText={(text) => this.setState({ text })}
                value={this.state.text}
                placeholder="name"
                style={{borderWidth:1, borderColor:'#f2f2e1', backgroundColor: '#eaeaea', height: 50, flex:1, padding:5}}
            />
            <TextInput
                onChangeText={(price) => this.setState({ price })}
                value={this.state.price}
                placeholder="price"
                style={{borderWidth:1, borderColor:'#f2f2e1', backgroundColor: '#eaeaea', height: 50, flex:1, padding:5}}
            />

            <TouchableOpacity onPress={()=> this.addAd(this.state.text,this.state.price)} >
                <View style={{height:50,backgroundColor:'#eaeaea' , alignContent:'center',alignItems:'center'}}>
                    <Ionicons name="md-add" size={30} style={{color: '#de9595', padding:10}}  />
                </View>
            </TouchableOpacity>
        </View>
    );
  }
}
export default connect()(AddAd);

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});