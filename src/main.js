// import babelpolyfill from 'babel-polyfill';
import Vue from "vue";
import App from "./App.vue";
// import router from "./router";kUwINhHIpBKNDcbD9McEEuG2WZXLX8AM
// import store from "./store";
import axios from "axios";
import ElementUI from "element-ui";
import VueRouter from 'vue-router';
import store from './vuex/store';
import Vuex from 'vuex';
import routes from './router/index';
import 'default-passive-events'
import "element-ui/lib/theme-chalk/index.css";
import "./assets/css/global.css";
import 'font-awesome/css/font-awesome.css';
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;
import Mock from './mock'

import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
    ak: 'kUwINhHIpBKNDcbD9McEEuG2WZXLX8AM'
});


Mock.bootstrap();//引入虚拟(mock)数据
Vue.use(ElementUI);
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
// axios.defaults.baseURL = '/api' //关联着模拟数据(mock.js),这里改变模拟数据就不可用
const router = new VueRouter({
  routes
})


//响应拦截器
router.beforeEach((to, from, next) => {
  //NProgress.start();
  if (to.path == '/login') {
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  if (!user && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
