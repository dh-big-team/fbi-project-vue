import repoApi from '@/api/repo'

const state = {
  list: [],
  testState1: 1,
  testState2: {
    obj1: 'obj1',
    obj2: 'obj2'
  }
}

const getters = {}

const actions = {
  getList(ctx) {
    return repoApi.list().then(list => {
      ctx.commit('reciveList', {
        list
      })
      return list
    })
  }
}

const mutations = {
  reciveList(state, { list }) {
    state.list = list
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
