import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建store仓库
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store
