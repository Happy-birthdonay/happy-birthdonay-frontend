import axios from 'axios';

const instance = axios.create({
  baseURL: '/',
  timeout: 4000,
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
