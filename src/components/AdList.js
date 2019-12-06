import React from 'react';
import { StyleSheet,ScrollView,TouchableOpacity ,Text} from 'react-native';


const AdList = ({ ads, delAd }) => (
    
    <ScrollView>
        {ads.map(ad =>
            <TouchableOpacity key={ad.id} onPress={()=> delAd(ad.id)} >
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