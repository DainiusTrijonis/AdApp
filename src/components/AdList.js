import React from 'react';
import { StyleSheet,ScrollView,TouchableOpacity ,Text} from 'react-native';
import {delAd} from '../actions/index'


const AdList = ({ ads }) => (
    
    <ScrollView>
        {ads.map(ad =>
            <TouchableOpacity key={ad.id} >
                <Text style={{padding:25,fontSize:24}}>
                    {ad.data.text}  {ad.data.price}
                </Text>
            </TouchableOpacity>
        )}
    </ScrollView>
)

export default AdList;

const styles = StyleSheet.create({
  container: {
      flex: 1,

  },
});