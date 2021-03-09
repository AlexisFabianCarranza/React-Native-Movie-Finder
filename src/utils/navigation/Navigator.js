import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import MovieSearchScreen from '../../screens/MovieSearchScreen';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{headerShown: false}}
        component={HomeScreen}
      />
      <Stack.Screen name="SearchScreen" component={MovieSearchScreen} />
    </Stack.Navigator>
  );
};
