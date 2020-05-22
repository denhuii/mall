import HttpRequest from './axios';
import config from '@/config';
const baseURL =
  process.env.NODE_ENV === 'development'
    ? config.baseUrl.dev
    : config.baseUrl.pro;

const axios = new HttpRequest(baseURL);

export default axios;
