import * as getters from './getters'

import Vue from 'vue'
import Vuex from 'vuex'
import cart from './cart'
import user from './user'
import global from './global'
import leftmenu from './leftmenu'
import router from './router'
import tabs from './tabs'

Vue.use(Vuex)

export default new Vuex.Store({
  //在严格模式下,无论何时发生了状态变更且不是由 mutation 函数引起的,将会抛出错误
  strict: true,
  //分割成模块
  modules: {
    cart,
    user,
    global,
    router,
    leftmenu,
    tabs
  }
})
