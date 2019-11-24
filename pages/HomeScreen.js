import React from 'react';
import {StyleSheet } from 'react-native';
import TodoApp from '../src/TodoApp'
import store from '../src/store'
import {Provider} from 'react-redux'

export default class HomeScreen extends React.Component {
  
  render() {
    return (
      <Provider store={store}>
        <TodoApp/>
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