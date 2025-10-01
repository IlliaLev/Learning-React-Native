import React from 'react';
import {View, Text} from 'react-native';

type ProfileProps = {
    name: string,
    age: number,
    occupation: string, 
};

const Profile = ({name, age, occupation}: ProfileProps) => {
    return(
        <View>
            <Text>Name: {name}</Text>
            <Text>Age: {age}</Text>
            <Text>Occupation: {occupation}</Text>
        </View>
    );
};

export default Profile;