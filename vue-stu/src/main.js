// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vuex from 'vuex'
import router from './router'
import store from './store'
import moment from 'moment'
import ElementUI from 'element-ui'
import _ from 'lodash'
import Avue from '@smallwei/avue'
import './mockjs/index'
import './assets/global.scss'

import 'element-ui/lib/theme-chalk/index.css'

// 配置axios
import axios from 'axios'
const instance = axios.create({
  baseURL: '/api',
  timeout: 1000
})
// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

// 挂载常用工具到原型上
Vue.prototype.$http = instance
Vue.prototype.$moment = moment
Vue.prototype._ = _

// 全局导入element的话 是会在Vue.prototype.$message注册的
// Vue.prototype.$message = ElementUI.Message

Vue.use(ElementUI)
Vue.use(vuex)

Vue.use(Avue, { axios })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: (h) =>
    h(App, {
      class: {
        foo: true,
        bar: false
      },
      style: {
        // color: 'red',
        fontSize: '14px'
      },
      // 普通的 HTML attribute
      attrs: {
        title: 'render函数生成'
      }
    })
}).$mount('#app')
