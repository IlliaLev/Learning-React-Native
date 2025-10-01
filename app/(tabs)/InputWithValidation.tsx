import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

const InputWithValidation = () => {
    const [inputValue, setInputValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    const handleInputChange = (text: string) => {
        setInputValue(text);
        setIsValid(text.length > 5);
    }

    return (
        <View>
            <TextInput style={{borderColor: 'gray', borderWidth: 1, height: 40}} onChangeText={handleInputChange} value={inputValue}></TextInput>
            {!isValid && <Text style={{color: 'red'}}>Input must be at least 6 characters</Text>}
        </View>
    );
};

export default InputWithValidation;