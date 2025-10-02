import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';

const CounterMinMax = () => {
    const [count, setCount] = useState<number>(0);
    const [min, setMin] = useState<number>(0);
    const [max, setMax] = useState<number>(0);

    const changeMin = (value: string) => {
        const newValue = Number.parseInt(value);
        setMin(newValue);
        setCount(newValue);
    }

    const changeMax = (value: string) => {
        const newValue = Number.parseInt(value);
        setMax(newValue);
    }

    const increment = () => {
        if(count < max){
            setCount(prev => prev + 1);
        }
    }

    return (
        <View>
            <Text>Count: {count}</Text>

            <Text>Min: {min}</Text>
            <TextInput onChangeText={changeMin} value={min.toString()}></TextInput>

            <Text>Max: {max}</Text>
            <TextInput onChangeText={changeMax} value={max.toString()}></TextInput>

            <Button title='Increment' onPress={increment}></Button>
        </View>
    );
}

export default CounterMinMax;