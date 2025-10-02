import React from 'react';
import { View } from 'react-native';

import MyComponent from './myComponent';
import ConditionalComponent from './conditionalComponent';
import Button from './button';
import Profile from './Profile';
import Counter from './Counter';
import NameInput from './NameInput';
import Person from './Person';
import ItemList from './ItemList';
import UserProfile from './UserProfile';
import ToggleComponent from './ToggleComponent';
import InputWithValidation from './InputWithValidation';
import TodoList from './TodoList';
import ColorChanger from './ColorChanger';
import CounterMinMax from './CounterMinMax';
import FormComponent from './FormComponent';
import Greeting from './Greeting';

export default function HomeScreen() {
  const user = {
    city: "Anytown",
    street: "123 Main St",
  };

  const skills = ["Js", "C++", "Python"];

  const handleGreet = () => {
    alert("Hello");
  };

  return (
    <View>
      {/*<MyComponent />
      <ConditionalComponent></ConditionalComponent> 
      <Button></Button>*/}
      {/*<Profile name="Illia" age={17} occupation="Ukraine"></Profile>
      <Counter></Counter>
      <NameInput></NameInput>
      <Person></Person>
      <ItemList></ItemList>
      <UserProfile></UserProfile>
      <ToggleComponent></ToggleComponent>
      <InputWithValidation></InputWithValidation>
      <ColorChanger></ColorChanger>
      <CounterMinMax></CounterMinMax>
      <FormComponent></FormComponent>
      <Greeting name='Illia' age={17}></Greeting>
      <Greeting name='Illia' ></Greeting>
      <Profile name='John' age={30} isEmployed={true} skills={skills} address={user} greet={handleGreet}></Profile>
        */}
      <TodoList></TodoList>
      
      </View>
  );
};
