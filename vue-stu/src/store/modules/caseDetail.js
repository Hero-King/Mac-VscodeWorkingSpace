const state = {
  loading: true,
  caseDetail: {},
  phoneCaseDetail: {},
  curPhoneCaseId: '',
  callRecord: {
    type: '',
    visible: false,
    loading: false,
    // 表单内容
    id: '',
    name: '',
    phone: '',
    region: '',
    resource: '',
    desc: ''
  }
}
const mutations = {
  loading(state, loading) {
    state.loading = loading
  },
  caseDetail(state, caseDetail) {
    state.caseDetail = caseDetail
  },
  curPhoneCaseId(state, curPhoneCaseId) {
    state.curPhoneCaseId = curPhoneCaseId
  },
  setPhoneCaseDetail(state, phoneCaseDetail) {
    state.phoneCaseDetail = phoneCaseDetail
  },
  setCallRecord(state, callRecord) {
    if (callRecord.type === 'user') {
      state.callRecord.id = state.caseDetail.id
    }
    if (callRecord.visible) {
      state.callRecord.loading = false
    }
    Object.assign(state.callRecord, callRecord)
  }
}

const actions = {
  getDetail({ commit, state }, id) {
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
        if (state.curPhoneCaseId === String(res.id)) {
          commit('setPhoneCaseDetail', JSON.parse(JSON.stringify(res)))
        }
        return res
      })
      .catch(() => {
        commit('caseDetail', {})
      })
      .finally(() => {
        commit('loading', false)
        commit('curPhoneCaseId', '')
      })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
