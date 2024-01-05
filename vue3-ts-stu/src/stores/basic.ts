import { defineStore } from 'pinia'

/**
 * defineStore(stringId, StateTree) 返回一个useStore(pinia, hot)函数 函数执行后返回store对象,
 * store 是一个用 reactive 包装的对象，这意味着不需要在 getters 后面写 .value 也不能解构
 * 为了从 store 中提取属性时保持其响应性，你需要使用 storeToRefs()
 *
 */
export const useBasicStore = defineStore('basic', {
  state: () => ({
    routesList: [],
    obj: {
      age: 20
    }
  }),
  getters: {
    routeLength(state) {
      return state.routesList.length
    }
  },
  actions: {
    getList() {
      this.routesList = [{ path: '/aa/', name: 'aa' }] as any
    }
  }
})
