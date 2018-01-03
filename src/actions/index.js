import axios from 'axios';

// import { API_KEY } from '../../config/keys';
const API_KEY = '3255cdd54b782323dc4392d231977cc8';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//type constant
export const FETCH_FORECAST = 'FETCH_FORECAST';

//sync action creator
export const fetchForecast = (city) => {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_FORECAST,
    payload: request
  };
};
