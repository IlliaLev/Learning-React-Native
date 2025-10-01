import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

const Person = () => {
    const [person, setPerson] = useState({name: "John", age: 30});

    const updateAge = () => {
        setPerson(prevPerson => ({...person, age: prevPerson.age + 1}));
    }

    return (
        <View>
            <Text>Name: {person.name}</Text>
            <Text>Age: {person.age}</Text>
            <Button title='Increment Age' onPress={updateAge}></Button>
        </View>
    );
};

export default Person;
