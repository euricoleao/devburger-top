import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3001',
});

api.interceptors.request.use( (config) => {
  const Token = localStorage.getItem('Token')

  config.headers.authorization = `bearer ${Token}`;

  return config;
});