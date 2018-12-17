
import axios from '../plugins/MyAxios'

// 注意： post 和 get语法不一样

// 登录
export const login = (params) => { return axios.post(`/admin/login`, params)};
// 获取商品列表
export const getGoods1List = (params) => {return axios.get('/goods1/list', { params: params })};
// 模糊查询
export const getSearchByDescribe = (params) => {return axios.get('/goods1/search', { params: params })};


export const getGoodsDescribe = (params) => {return axios.get('/lianJia/detail', { params: params })};

//export const requestLogin = (params) => { return axios.post(`/login/in`, params)};

