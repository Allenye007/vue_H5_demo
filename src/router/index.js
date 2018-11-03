import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Index from '@/views/myHome/index'


import Order from '@/views/guestOrder/order'
import Analysis from '@/views/myAnalysis/analysis'
import Guest from '@/views/myGuest/guest'
import Income from '@/views/myIncome/income'

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
    }
  ]
})
