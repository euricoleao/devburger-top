import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://vercel.com/erisvaldos-projects/devburger-pa/EBATzVH1opCjmSJ3gTG3qNQyUxiS',
});

api.interceptors.request.use( (config) => {
  const userData = localStorage.getItem('devburger:userData')

  const Token = userData && JSON.parse(userData).Token

  config.headers.authorization = `bearer ${Token}`;

  return config;
});
