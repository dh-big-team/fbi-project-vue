import { store, other } from '@/utils/'
export default {
  // 头部当前路由，匹配高亮所用
  headerCurRouter: '',

  // 左侧当前路由，匹配高亮所用
  leftCurRouter: '',

  //动态路由数据
  routerMenu: other.changToRouterMenu(store.get('userinfo')),

  //是否动态更新路由
  isAutoRouter: false
}
