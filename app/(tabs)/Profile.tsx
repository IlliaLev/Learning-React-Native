import React from 'react';
import {View, Text, Button} from 'react-native';

interface ProfileProps {
    name: string,
    age: number,
    isEmployed: boolean,
    skills: string[],
    address: {
        street: string, 
        city: string
    },
    greet: () => void,
};

const Profile: React.FC<ProfileProps> = ({name, age, isEmployed, skills, address, greet}) => {
    return (
        <View>
            <Text>Name: {name}</Text>
            <Text>Age: {age}</Text>
            <Text>Employed: {isEmployed ? "Yes" : "No"}</Text>
            <Text>Skills: {skills.join(', ')}</Text>
            <Text>Address: {address.street} {address.city}</Text>
            <Button title="Greet" onPress={greet}></Button>
        </View>
    );
}

export default Profile;