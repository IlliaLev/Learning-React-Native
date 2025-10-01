import React from 'react';
import { Text, View } from 'react-native';

const name = "Ali";

const MyComponent = () => {
    return(
        <View>
            <Text>Hello, {name}!</Text>
        </View>
    );
};

export default MyComponent;