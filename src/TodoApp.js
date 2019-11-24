import React from 'react';
import {StyleSheet , View, Text} from 'react-native';

import AddTodo from './containers/AddTodo'
export default class TodoApp extends React.Component {
  
  render() {
    return (
        <View style={styles.container}>
            <AddTodo/>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
      flex:1,
      paddingTop: 40,
  },
});