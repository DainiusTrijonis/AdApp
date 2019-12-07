import React from 'react';
import { StyleSheet,View } from 'react-native';


import AddAd from './containers/AddAd';
import VisibleAds from './containers/VisibleAds';
import FetchAdsButton from './containers/FetchAdsButton';

class AdsApp extends React.Component {

  state = {
    ads: [],
  }

  render() {
    return (
      <View style={styles.container}>
        <AddAd/>
        <View>
          <FetchAdsButton/>
        </View>

        <View>
          <VisibleAds/>
        </View>
      </View>
    );
  }
}

export default AdsApp;

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});