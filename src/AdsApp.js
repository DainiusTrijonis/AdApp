import React from 'react';
import { StyleSheet,View } from 'react-native';


import AddAd from './containers/AddAd';
import VisibleAds from './containers/VisibleAds';


export default class AdsApp extends React.Component {

  state = {
    ads: [],
  }
  render() {
    return (
      <View style={styles.container}>
        <AddAd/>

        <View>
          <VisibleAds/>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});