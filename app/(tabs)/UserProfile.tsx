import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const UserProfile = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');

    return (
        <View>
            <Text>First Name: {firstName}</Text>
            <TextInput style={styles.textInput} onChangeText={text => setFirstName(text)} value={firstName}></TextInput>
            
            <Text>Last Name: {lastName}</Text>
            <TextInput style={styles.textInput} onChangeText={text => setLastName(text)} value={lastName}></TextInput>
            
            <Text>Age: {age}</Text>
            <TextInput style={styles.textInput} onChangeText={text => setAge(text)} value={age} keyboardType='numeric'></TextInput>
            <Text>
                Name: {firstName} {lastName}, Age: {age}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
    }
});

export default UserProfile;