import React from 'react';
import {get} from '../utils/http/HttpService';

export const getMovieBySearch = async (search) => {
  try {
    return await get(`&s=${search}`);
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getMovieDetailById = async (movieId) => {
  try {
    return await get(`&i=${movieId}`);
  } catch (e) {
    console.log(e);
    return null;
  }
};
