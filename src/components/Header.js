import React from 'react';
import {Appbar} from 'react-native-paper';

export default ({scene, previous, navigation}) => {
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={navigation.goBack} />
      <Appbar.Content title="Movie Finder" />
    </Appbar.Header>
  );
};
