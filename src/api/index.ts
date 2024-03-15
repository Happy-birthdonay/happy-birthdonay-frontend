import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 4000,
});

instance.interceptors.request.use(
  function (config) {
    config.headers['Content-Type'] = 'application/json; charset=utf-8';
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
