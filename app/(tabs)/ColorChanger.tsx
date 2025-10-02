import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

const ColorChanger = () => {
    const colors = ['red', 'blue', 'green'];
    const [currentColor, setCurrentColor] = useState('');
    const [currentColorIndex, setCurrentColorIndex] = useState(0);

    const changeColor = () => {
        if(currentColorIndex === 2){
            setCurrentColorIndex(0);
            setCurrentColor(colors[currentColorIndex]);
        } else {
            setCurrentColor(colors[currentColorIndex]);
            setCurrentColorIndex(prev => prev + 1);
        }
    }

    return (
        <View style={{backgroundColor: currentColor}}>
            <Text style={{color: currentColor}}>Color</Text>
            <Button title='Change Color' onPress={changeColor}></Button>
        </View>
    );
}

export default ColorChanger;