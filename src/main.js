import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/css/reset.css'

// 引入组件
import tabBar from './component/tabBar'
import pageTittle from './component/pageTittle'; // 页面tittle

//提示
import {Toast} from 'wc-messagebox'
import 'wc-messagebox/style.css'
Vue.use(Toast);
//
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 注册组件
// 底部栏
Vue.component(tabBar.name, tabBar);
Vue.component(pageTittle.name, pageTittle) // 页面tittle

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
