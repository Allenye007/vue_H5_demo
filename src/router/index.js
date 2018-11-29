import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/index' // 主页
import GoodsDetail from '../views/goods/goodsDetail'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path:'/index',
      name:'index',
      component:Index
    },
    {
      path:'/goodsDetail',
      name:'goodsDetail',
      component:GoodsDetail
    }
  ],
})
