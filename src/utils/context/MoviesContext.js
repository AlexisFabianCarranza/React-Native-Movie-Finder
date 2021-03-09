import React, {createContext, useEffect, useState} from 'react';
import {getMovieBySearch} from '../../repository/moviesRepository';

export const MoviesContext = createContext();

const initialState = {
  moviesResult: [],
};

const useStateContext = () => {
  const [moviesState, setMoviesState] = useState(initialState);

  const fetchMoviesByTitle = async (title) => {
    const moviesSearchResult = await getMovieBySearch(title);
    setMoviesState({
      moviesResult: moviesSearchResult['Search'],
    });
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
