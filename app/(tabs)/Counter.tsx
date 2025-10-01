import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

/*const Counter = () => {
    const [count, setCount] = useState(0);
    return(
        <View>
            <Text>Count: {count}</Text>
            <Button title='Increment' onPress={() => setCount(count + 1)}></Button>
        </View>
    );
};*/

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }

    return (
        <View>
            <Text>Count: {count}</Text>
            <Button title='Increment' onPress={increment}></Button>
        </View>
    );
}

export default Counter;