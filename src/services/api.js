import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3001',
});

api.interceptors.request.use( (config) => {
  const userData = localStorage.getItem('devburger:userData')

  const Token = userData && JSON.parse(userData).Token

  config.headers.authorization = `bearer ${Token}`;

  return config;
});