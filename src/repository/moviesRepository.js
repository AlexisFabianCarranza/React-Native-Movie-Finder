import React from 'react';
import {get} from '../utils/http/HttpService';

export const getMoviesByTitle = async (title) => {
  try {
    return await get(`&t=${title}`);
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getMovieBySearch = async (search) => {
  try {
    return await get(`&s=${search}`);
  } catch (e) {
    console.log(e);
    return null;
  }
};
