import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const NameInput = () => {
    const [name, setName] = useState("Initial Name");

    return (
        <View>
            <Text>Name: {name}</Text>
            <TextInput style={styles.textInput} onChangeText={text => setName(text)} value={name}></TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        width: "50%",
        maxWidth: 500,
        backgroundColor: 'black',
        color: 'red',
        marginTop: 30,
        marginHorizontal: 40,
        borderRadius: 5,
        alignSelf: "center",
    }
});

export default NameInput;