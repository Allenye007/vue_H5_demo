import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Index from '@/views/myHome/index'  // 主页

import Order from '@/views/guestOrder/order'  //客户订单
import Analysis from '@/views/myAnalysis/analysis'  // 数据分析
import Guest from '@/views/myGuest/guest'  // 我的客户
import Income from '@/views/myIncome/income'  // 我的收益
import Shop from '@/views/myHome/myShop/index'  // 我的小店

import GoodsList from '@/views/myHome/myShop/editShop/goodsList'  // 商品列表
import QrCode from '@/views/myHome/myShop/editShop/qrCode'  // 二维码
import ShopName from '@/views/myHome/myShop/editShop/shopName'  // 店铺名称 公告  微信号

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/index',
      name:'index',
      component:Index,
    },
    {
      path:'/order',
      name:'order',
      component:Order
    },
    {
      path:'/analysis',
      name:'analysis',
      component:Analysis
    },
    {
      path:'/guest',
      name:'guest',
      component:Guest
    },
    {
      path:'/income',
      name:'income',
      component:Income
    },
    {
      path:'/shop',
      name:'shop',
      component:Shop
    },
    {
      path:'/goodsList',
      name:'goodsList',
      component:GoodsList
    },
    {
      path:'/qrCode',
      name:'qrCode',
      component:QrCode
    },
    {
      path:'/shopName',
      name:'shopName',
      component:ShopName
    },
  ]
})
