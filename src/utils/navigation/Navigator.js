import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import MovieSearchScreen from '../../screens/MovieSearchScreen';
import {Text} from 'react-native-paper';
import Header from '../../components/Header';
import MovieDetailScreen from '../../screens/MovieDetailScreen';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        options={{headerShown: false}}
        component={HomeScreen}
      />
      <Stack.Screen
        name="SearchScreen"
        component={MovieSearchScreen}
        options={{
          header: Header,
        }}
      />
      <Stack.Screen
        name="MovieDetailScreen"
        component={MovieDetailScreen}
        options={{
          header: Header,
        }}
      />
    </Stack.Navigator>
  );
};
