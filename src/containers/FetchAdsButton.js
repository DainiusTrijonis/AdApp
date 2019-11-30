import React from 'react';
import {StyleSheet , View, Button} from 'react-native';
import {connect} from 'react-redux';
import {displayAds} from '../actions/index'

class FetchAdsButton extends React.Component {
  fetchAds = ( ) =>
  {
    this.props.dispatch(displayAds());
  }
  render() {
    return (
        <View style={{flexDirection:'row',marginHorizontal:20}}>
            <Button title='Fetch data' onPress={() => this.fetchAds()} />
        </View>
    );
  }
}
export default connect()(FetchAdsButton);

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});