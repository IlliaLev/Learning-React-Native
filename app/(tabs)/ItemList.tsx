import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';

const ItemList = () => {
    const [items, setItems] = useState(['item1', 'item2', 'item3']);

    const addItem = () => {
        setItems(prevItems => [...prevItems, `item${prevItems.length + 1}`]);
    }

    return (
        <View>
            {items.map(item => (
                <Text key={item}>{item}</Text>
            ))}
            <Button title='Add Item' onPress={addItem}></Button>
        </View>
    );
};

export default ItemList;