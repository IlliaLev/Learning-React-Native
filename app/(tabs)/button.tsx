import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = () => {
    return (
        <TouchableOpacity style={styles.button} onPress={() => {alert("Button pressed")}}>
            <Text style={styles.buttonText}>Press me</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        padding: 10, 
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
    },
});

export default Button;