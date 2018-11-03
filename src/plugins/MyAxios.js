// 配置axios
import axios from 'axios';
const MyAxios = {};
MyAxios.install = function (Vue) {
  // 配置基准路径
  axios.defaults.baseURL = 'http://bapi.zhenxuan.mobi';
  // axios.defaults.baseURL = 'http://localhost:3002';
  // 添加请求拦截器
  axios.interceptors.request.use(function (config) {
    if (config.url.toLowerCase() !== 'login') {
      const token = sessionStorage.getItem('token');
      // 如果请求的地址不是login，设置token
      config.headers['x-access-token'] = token;
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  // 添加响应拦截器
  axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  });
  // 配置axios
  Vue.prototype.$http = axios;
};

export default MyAxios;
