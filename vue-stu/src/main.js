// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vuex from 'vuex'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 配置axios
import axios from 'axios'
import './assets/global.css'

Vue.use(vuex)

axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
// 挂载常用工具到原型上
Vue.prototype.$http = axios

// 全局导入element的话 是会在Vue.prototype.$message注册的
// Vue.prototype.$message = ElementUI.Message

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>'
})
