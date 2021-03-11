import React, {useContext, useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/core';
import {MoviesContext} from '../utils/context/MoviesContext';
import MovieDetailUI from '../components/MovieDetailUI';

export default () => {
  const route = useRoute();
  const {getMovieById} = useContext(MoviesContext);
  const movieId = route.params.movieId;
  const [movieInfo, setMovieInfo] = useState(null);
  useEffect(() => {
    const getMovieDetail = async () => {
      const movieDetail = await getMovieById(movieId);
      setMovieInfo(movieDetail);
    };
    if (movieId) {
      getMovieDetail();
    }
  }, [movieId]);

  return <MovieDetailUI movieInfo={movieInfo} />;
};
