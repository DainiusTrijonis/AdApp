import React from 'react';
import {StyleSheet , View, Text} from 'react-native';

import AddTodo from './containers/AddTodo'
import VisibleTodos from './containers/VisibilityTodos'

export default class TodoApp extends React.Component {
  state={
    todos:[],
    visibilityFilter:'SHOW_ALL_TODOS'
  }
  render() {
    return (
        <View style={styles.container}>
          <AddTodo/>

          <View>
            <VisibleTodos/>
          </View>
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