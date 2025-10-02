import React, {useState} from 'react';
import {View, Text, FlatList, TextInput, Button, StyleSheet} from 'react-native';

type Todo = {
    id: string,
    text: string,
};

const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState('');
    
    const addTodo = () => {
        if(newTodo.trim() !== ""){
            setTodos([...todos, { id: Date.now().toString(), text: newTodo.trim() }]);
            setNewTodo('');
        }
    }

    const renderItem = ({item}: any) => (
        <Text style={styles.item}>{item.text}</Text>
    );

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder='Add a todo'
                value={newTodo}
                onChangeText={text => setNewTodo(text)}
            />
            <Button title='Add' onPress={addTodo}></Button>
            <FlatList 
                data={todos}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        //flex: 1
        padding: 20,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,  
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
});

export default TodoList;