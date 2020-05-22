import axios from 'axios';
import errorHandle from './errorHandle';
import config from '@/config';

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? config.baseUrl.dev
      : config.baseUrl.pro,
});

instance.defaults.baseURL = 'http://localhost:36742/';

// Add a request interceptor
instance.interceptors.request.use(
  config => {
    // Do something before request is sent
    // console.log('config is:' + config);
    return config;
  },
  err => {
    errorHandle(err);
    // Do something with request error
    return Promise.reject(err);
  },
);

// Add a response interceptor
instance.interceptors.response.use(
  res => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (res.status === 200) {
      return res.data;
    } else {
      return Promise.reject(res);
    }
  },
  err => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    errorHandle(err);
    return Promise.reject(err);
  },
);
export default instance;
