import React, {useContext, useEffect} from 'react';
import {useRoute} from '@react-navigation/core';
import {MoviesContext} from '../utils/context/MoviesContext';
import MovieSearchScreenUI from '../components/MovieSearchScreenUI';

export default () => {
  const route = useRoute();
  const {movieTitle} = route.params;
  const {moviesResult, fetchMoviesByTitle} = useContext(MoviesContext);
  useEffect(() => {
    if (movieTitle) {
      fetchMoviesByTitle(movieTitle);
    }
  }, [movieTitle]);
  return <MovieSearchScreenUI movies={moviesResult} />;
};
