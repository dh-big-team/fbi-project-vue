import * as types from './mutations_types'

export default {
  [types.SET_CUR_ROUTE](state, paths) {
    // console.log(paths);
    state.headerCurRouter = paths.rootPath
    state.leftCurRouter = paths.fullPath
  },
  [types.SET_ROUTER_MENU](state, routerMenu) {
    state.routerMenu = routerMenu
  },
  [types.SET_IS_AUTO_ROUTER](state, isAutoRouter) {
    state.isAutoRouter = isAutoRouter
  }
}
