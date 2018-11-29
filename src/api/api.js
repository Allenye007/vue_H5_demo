
import axios from '../plugins/MyAxios'

// 注意： post 和 get语法不一样

// 获取链家列表
export const getLianJiaList = (params) => {return axios.get('/lianJia/list', { params: params })};

export const getGoodsDetail = (params) => {return axios.get('/lianJia/detail', { params: params })};

//export const requestLogin = (params) => { return axios.post(`/login/in`, params)};

