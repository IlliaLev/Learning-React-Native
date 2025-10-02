import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

const FormComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    return (
        <View>
            <Text>Name</Text>
            <TextInput onChangeText={text => setName(text)} value={name}></TextInput>
            
            <Text>Email</Text>
            <TextInput onChangeText={text => setEmail(text)} value={email}></TextInput>
            
            <Text>Phone</Text>
            <TextInput onChangeText={text => setPhone(text)} value={phone}></TextInput>
            
            <Text>Name: {name}, Email: {email}, Phone: {phone}</Text>
        </View>
    );
}

export default FormComponent;