import React from 'react';
import {View, Text} from 'react-native';

interface GreetingProps {
    name: string,
    age?: number,
};

const Greeting: React.FC<GreetingProps> = ({name, age}) => {
    return (
        <View>
            <Text>Hello, {name}</Text>
            {age && <Text>You are {age} years old</Text>}
        </View>
    );
};

export default Greeting;