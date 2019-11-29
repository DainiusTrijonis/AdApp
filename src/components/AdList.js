import React from 'react';
import { StyleSheet,View,TouchableOpacity ,Text} from 'react-native';
const AdList = ({ ads }) => (
    <View>
        {ads.map(ad =>
            <TouchableOpacity key={ad.id}>
                <Text style={{padding:25,fontSize:24}}>
                    {ad.text}  {ad.price}
                </Text>
            </TouchableOpacity>
        )}
    </View>
)
export default AdList;
const styles = StyleSheet.create({
  container: {
      flex: 1,

  },
});