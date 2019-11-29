import React from 'react';
import { StyleSheet} from 'react-native';

import AdsApp from '../src/AdsApp'
import store from '../src/store'
import {Provider} from 'react-redux'
export default class HomeScreen extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <AdsApp/>
      </Provider>
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