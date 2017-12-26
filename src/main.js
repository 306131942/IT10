// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 样式
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
// 导入UI
import ElementUI from 'element-ui'
// 导入axios
import './api/axios-config.js'
// import axios from 'axios'
// window.axios = axios
Vue.config.productionTip = false

// 使用el ui
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
