// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vuex from 'vuex'
import router from './router'
import store from './store'
import moment from 'moment'
import ElementUI from 'element-ui'
import Storage from 'vue-ls'
import VueLazyload from 'vue-lazyload'
import _ from 'lodash'
import i18n from './i18n'
import Avue from '@smallwei/avue'
import RegisterComponents from './utils/registerComponents'
import VueClipboard from 'vue-clipboard2'
import MyImagePreview from '@/components/ImagePreview/index.js'
import './assets/global.scss'
import './style/common.less'

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

Vue.use(MyImagePreview)

Vue.use(Avue, { axios })

Vue.use(RegisterComponents)

const options = {
  namespace: 'vuejs__', // key prefix
  name: 'ls', // name variable Vue.[ls] or this.[$ls],
  storage: 'local' // storage name session, local, memory
}
// Vue plugin for work with local storage, session storage and memory storage from Vue context
// 注册Vus.ls 和 this.$ls
Vue.use(Storage, options)

// Vue module for lazyloading images in your applications.
// 注册组件lazyComponent/lazyImage
// 注册指令lazy/lazy-container
// 原型添加$Lazyload方法
Vue.use(VueLazyload)

// 复制
Vue.use(VueClipboard)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  i18n,
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
        // title: 'render函数生成'
      }
    })
}).$mount('#app')
