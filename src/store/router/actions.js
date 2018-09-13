import * as types from './mutations_types'
import { userInfo } from 'os'
import { other } from '@/utils/'

export default {
  set_cur_route: ({ commit }, paths) => {
    commit(types.SET_CUR_ROUTE, paths)
  },
  set_router_menu: ({ commit }, userInfo) => {
    commit(types.SET_ROUTER_MENU, other.changToRouterMenu(userInfo))
  },
  set_is_auto_router: ({ commit }, isAutoRouter) => {
    commit(types.SET_IS_AUTO_ROUTER, isAutoRouter)
  }
}
