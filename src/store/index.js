import * as getters from './getters'

import Vue from 'vue'
import Vuex from 'vuex'
import repo from './modules/repo'
import req from './modules/Req'

Vue.use(Vuex)

export default new Vuex.Store({
  //在严格模式下,无论何时发生了状态变更且不是由 mutation 函数引起的,将会抛出错误
  strict: true,
  //分割成模块
  modules: {
    repo,
    req
  }
  // getters
})
