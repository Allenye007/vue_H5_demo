import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'//登录
import Index from '@/views/myHome/index'//真选店主和大众用户
import Analysis from '@/views/myAnalysis/analysis'//数据分享
import Guest from '@/views/myGuest/guest'//我的客户
import Income from '@/views/myIncome/income'//实时收益
import CustomerOrder from '@/views/myHome/CustomerOrder/CustomerOrder'//客户订单
import CustomerEvaluate from '@/views/myHome/CustomerOrder/CustomerEvaluate'//待评价
import ShopIndex from '@/views/myHome/myShop/index'//我的小店
import editShop from '@/views/myHome/myShop/editShop/editShop'//编辑我的小店


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
    },{
      path:'/CustomerOrder',
      name:'CustomerOrder',
      component:CustomerOrder
    },{
      path:'/CustomerEvaluate',
      name:'CustomerEvaluate',
      component:CustomerEvaluate
    },{
      path:'/ShopIndex',
      name:'ShopIndex',
      component:ShopIndex
    },{
      path:'/editShop',
      name:'editShop',
      component:editShop
    }
  ]
})
