import Vue from 'vue'
import Router from 'vue-router'


import Home from '@/views/home' // HOME 切换

import Index from '@/views/index/index' // 主页
import Search from '@/views/index/search' // 主页

import Cart from '@/views/cart/index' // 购物车
import Shop from '@/views/shop/index' // 商店
import Mine from '@/views/mine/index' // 我的

import GoodsDetail from '../views/index/goods/goodsDetail'

Vue.use(Router);

export default new Router({
  routes: [
    {// tabbar 切换
      path:'/home',
      name:'home',
      component:Home,
      // 子路由
      children: [
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
          path:'/cart',
          name:'cart',
          component:Cart
        },
        {
          path:'/shop',
          name:'shop',
          component:Shop
        },
        {
          path:'/mine',
          name:'mine',
          component:Mine
        },
      ]
    },
    {
      path: '/',
      redirect:'/index'
    },
    {
      path:'/goodsDetail',
      name:'goodsDetail',
      component:GoodsDetail
    },
    {
      path:'/search',
      name:'search',
      component:Search
    }
  ],
})
