import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

const ToggleComponent = () => {
    const [isToggled, setIsToggled] = useState(false);

    const toggle = () => {
        setIsToggled(prevIsToggled => !prevIsToggled);
    }

    return (
        <View>
            <Text>Toggled: {isToggled ? "Yes" : "No"}</Text>
            <Button title='Toggle' onPress={toggle}></Button>
        </View>
    );
};

export default ToggleComponent;