import axios from 'axios';
import errorHandle from './errorHandle';
import { Toast } from 'vant';

class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  // 获取axios配置
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      timeout: 1000,
    };
    return config;
  }
  // 设定拦截器
  interceptors(instance) {
    // Add a request interceptor
    instance.interceptors.request.use(
      config => {
        // Do something before request is sent
        // console.log('config is:' + config);
        Toast.loading({
          message: '加载中...',
          forbidClick: true,
          loadingType: 'spinner',
        });
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
        Toast.clear();
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        if (res.status === 200) {
          return res.data;
        } else {
          return Promise.reject(res);
        }
      },
      err => {
        Toast.clear();
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        errorHandle(err);
        return Promise.reject(err);
      },
    );
  }

  // 创建实例
  request(options) {
    const instance = axios.create();
    const newOptions = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance);
    return instance.request(newOptions);
  }

  get(url, config) {
    const options = Object.assign(
      {
        method: 'get',
        url,
      },
      config,
    );
    return this.request(options);
  }
  post(url, data) {
    return this.request({
      method: 'post',
      url,
      data,
    });
  }
}

export default HttpRequest;
