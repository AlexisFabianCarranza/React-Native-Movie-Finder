import React, {useCallback, useContext, useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/core';
import {MoviesContext} from '../utils/context/MoviesContext';
import MovieSearchScreenUI from '../components/MovieSearchScreenUI';
import _ from 'lodash';

export default () => {
  const navigation = useNavigation();
  const route = useRoute();
  const movieTitleParam = route.params.movieTitle;
  const [movieTitle, setMovieTitle] = useState(null);
  const {
    moviesResult,
    fetchMoviesByTitle,
    moviesSearchError,
    movieSearchErrorMessage,
    isLoading,
  } = useContext(MoviesContext);

  const delayedSearch = useCallback(_.debounce(fetchMoviesByTitle, 600), []);

  useEffect(() => {
    if (movieTitleParam) {
      setMovieTitle(movieTitleParam);
    }
  }, [movieTitleParam]);

  useEffect(() => {
    if (movieTitle) {
      delayedSearch(movieTitle);
    }
  }, [movieTitle]);

  const handleChangeMovieTitle = (movieTitleSearch) => {
    setMovieTitle(movieTitleSearch);
  };

  const openMovieDetail = (movieId) => {
    navigation.navigate('MovieDetailScreen', {movieId});
  };

  return (
    <MovieSearchScreenUI
      movies={moviesResult}
      movieTitle={movieTitle}
      handleChangeMovieTitle={handleChangeMovieTitle}
      moviesSearchError={moviesSearchError}
      movieSearchErrorMessage={movieSearchErrorMessage}
      openMovieDetail={openMovieDetail}
      isLoading={isLoading}
    />
  );
};
