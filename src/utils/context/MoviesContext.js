import React, {createContext, useEffect, useState} from 'react';
import {getMovieBySearch} from '../../repository/moviesRepository';
import getErrorMessageByType from '../errors/getErrorMessageByType';

export const MoviesContext = createContext();

const initialState = {
  moviesResult: [],
  moviesSearchError: false,
  movieSearchErrorMessage: '',
};

const useStateContext = () => {
  const [moviesState, setMoviesState] = useState(initialState);

  const fetchMoviesByTitle = async (title) => {
    const moviesSearchResult = await getMovieBySearch(title);
    if (!moviesSearchResult || moviesSearchResult.Response === 'False') {
      const errorMessage = getErrorMessageByType(moviesSearchResult.Error);
      setMoviesState((oldMovieState) => ({
        ...oldMovieState,
        moviesSearchError: true,
        movieSearchErrorMessage: errorMessage,
      }));
    } else {
      setMoviesState((oldMovieState) => ({
        ...oldMovieState,
        moviesResult: moviesSearchResult['Search'],
      }));
    }
  };

  return {
    ...moviesState,
    fetchMoviesByTitle,
  };
};

export const MoviesProvider = (props) => {
  const contextState = useStateContext();

  return (
    <MoviesContext.Provider value={contextState}>
      {props.children}
    </MoviesContext.Provider>
  );
};
