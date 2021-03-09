import axios from 'axios';
import {OMD_DB_API_KEY} from '../constants/Constants';

export const http = axios.create({
  baseURL: `http://www.omdbapi.com/?apikey=${OMD_DB_API_KEY}&`,
  headers: {
    'Content-type': 'application/json',
  },
});

export const get = (url, params) => {
  return http
    .get(url, {params})
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(err);
    });
};
