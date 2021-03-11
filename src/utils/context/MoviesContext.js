import React, {createContext, useState} from 'react';
import {
  getMovieBySearch,
  getMovieDetailById,
} from '../../repository/moviesRepository';
import getErrorMessageByType from '../errors/getErrorMessageByType';

export const MoviesContext = createContext();

const initialState = {
  moviesResult: [],
  moviesSearchError: false,
  movieSearchErrorMessage: '',
  isLoading: false,
};

const useStateContext = () => {
  const [moviesState, setMoviesState] = useState(initialState);

  const fetchMoviesByTitle = async (title) => {
    setMoviesState((oldMovieState) => ({
      ...oldMovieState,
      isLoading: true,
    }));
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
        moviesSearchError: false,
        moviesResult: moviesSearchResult['Search'],
      }));
    }
    setTimeout(
      () =>
        setMoviesState((oldMovieState) => ({
          ...oldMovieState,
          isLoading: false,
        })),
      1000,
    );
  };

  const getMovieById = async (movieId) => {
    try {
      return getMovieDetailById(movieId);
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  return {
    ...moviesState,
    fetchMoviesByTitle,
    getMovieById,
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
