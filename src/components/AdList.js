import React from 'react';
import {View, StyleSheet,ScrollView,TouchableOpacity , TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AdList = ({ ads, delAd, onChangeAd}) => (
    
    <ScrollView>
        {ads.map(ad =>
            

            <View key={ad.id} style={styles.container} >
                <TextInput 
                    style={{padding:25,fontSize:24}}
                    onChangeText = {text =>onChangeAd(text, ad.data.price, ad)}
                    value={ad.data.text}
                />
                <TextInput 
                    style={{padding:25,fontSize:24}}
                    onChangeText = {text =>onChangeAd(ad.data.text, text, ad)}
                    value={ad.data.price}
                />
                <TouchableOpacity onPress={()=> delAd(ad.id)} style={styles.buttonDelete} >
                    <View style={{height:15, alignContent:'center',alignItems:'center'}}>
                        <Ionicons name="md-trash" size={30} style={{color: '#de9595', padding:10}}  />
                    </View>
                </TouchableOpacity>
            </View>
        )}
    </ScrollView>
)

export default AdList;

const styles = StyleSheet.create({
    container: {
    padding: 15,
    flexDirection: 'row',

    },
    buttonDelete: {
        padding: 15,
    },


});