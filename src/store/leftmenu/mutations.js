import * as types from './mutations_types'

export default {
  [types.SET_MENU_OPEN](state) {
    state.width = '190px'
    state.menu_flag = true
  },
  [types.SET_MENU_CLOSE](state) {
    state.width = '50px'
    state.menu_flag = false
  },
  [types.SET_MENU_SHOW](state) {
    state.show_flag = true
    state.width = '190px'
  },
  [types.SET_MENU_HIDE](state) {
    state.show_flag = false
    state.width = '0px'
  }
}
