import React from 'react';
import HomeUI from '../components/HomeUI';
import {useNavigation} from '@react-navigation/core';

export default () => {
  const [movieTitle, setMovieTitle] = React.useState('');
  const navigation = useNavigation();
  const navigateToMovieSearchScreen = () => {
    navigation.navigate('SearchScreen', {movieTitle});
    setMovieTitle('');
  };

  return (
    <HomeUI
      movieTitle={movieTitle}
      setMovieTitle={setMovieTitle}
      navigateToMovieSearchScreen={navigateToMovieSearchScreen}
    />
  );
};
