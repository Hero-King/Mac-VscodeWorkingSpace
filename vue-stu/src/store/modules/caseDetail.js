const state = {
  loading: true,
  caseDetail: {},
  phoneCaseDetail: {}
}
const mutations = {
  loading(state, loading) {
    state.loading = loading
  },
  caseDetail(state, caseDetail) {
    state.caseDetail = caseDetail
  },
  phoneCaseDetail(state, phoneCaseDetail) {
    state.phoneCaseDetail = phoneCaseDetail
  }
}

const actions = {
  getDetail({ commit }, id) {
    return new Promise((resolve, reject) => {
      commit('loading', true)
      setTimeout(resolve, 1000, {
        id,
        name: `测试${id}`,
        phone: '13888888888',
        address: 'shanghai'
      })
    })
      .then((res) => {
        commit('caseDetail', res)
      })
      .finally(() => {
        commit('loading', false)
      })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
