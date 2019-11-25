import React from 'react';
import {Text,TouchableOpacity,ScrollView} from 'react-native';

const TodoList = ({todos,toggleTodo}) =>(

    <ScrollView style={{padding:20}}>
        {todos.map(todo => 
            <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
                <Text style={{fontSize:25,textDecorationLine: todo.completed ? 'line-through' : 'none'
                }}>{todo.text}</Text>
            </TouchableOpacity>    
        )}
    </ScrollView>
)
export default TodoList;
