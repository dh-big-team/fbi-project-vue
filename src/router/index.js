import Vue from 'vue'
import Router from 'vue-router'
import hooks from './hooks'

import { Login, Function } from 'views/'
import { Home, TestHome } from 'layout/'
// import Adv from './adv/'
// import Functions from './function/'
// import Demo from './demo/'
// import Components from './components/'
import Sys from './sys'
import store from '../store'

Vue.use(Router)

const routerInstance = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      hidden: true,
      redirect(to) {
        return 'login'
      }
    },
    {
      path: '/login',
      name: 'login',
      hidden: true,
      component: Login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/index',
      name: 'index',
      component: Home,
      meta: {
        title: '首页'
      },
      children: [
        {
          path: '',
          name: 'index_child',
          component: Function.Open.Echarts
        }
      ]
    },
    {
      path: '/test',
      name: 'test',
      hidden: true,
      component: TestHome
    }
    //Sys
  ]
})

/**
 * 全局守卫，处理用户登录及鉴权
 */
routerInstance.beforeEach((to, from, next) => {
  document.title = '聚合支付管理系统'

  if (to.path === '/login') {
    //登录页直接放行
    next()
    return
  }
  if (!store.getters.getToken) {
    //没有登录，跳转到登录页
    next('/login')
    return
  }
  //此处暂时怎么写，正式开发时应将可放行的url统一初始化到一个全局数组中
  if (store.getters.getToken && (to.path === '/index' || to.path === '/404')) {
    //已登录且访问的是首页放行
    next()
    return
  }
  //已登录放行
  next()
})

export default routerInstance
