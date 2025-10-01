import React from 'react';
import {View, Text} from 'react-native';

const isLoggedIn = true;

const ConditionalComponent = () => {
    return(
        <View>
            {
                isLoggedIn ? (
                    <Text>Welcome Back!</Text>
                ) : (
                    <Text>Please log in</Text>
                )
            }
        </View>
    );
};

export default ConditionalComponent;