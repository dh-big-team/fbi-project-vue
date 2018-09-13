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
  //已登录，且访问放行之外的url
  next()

  // console.log('token', store.getters.getToken)
  // console.log('----to', to)
  // console.log('-----from', from)
  // let userMenuList = store.getters.getUserMenuList
  // console.log('-----userMenu', userMenuList)
  // console.log(to.meta)

  // let hasPerm = false
  //校验用户是否有该权限
  //暂时先这么写，后续再优化权限判断算法
  // for (let fidx in userMenuList) {
  //   let fmenu = userMenuList[fidx]
  //   if (fmenu.childList.length > 0) {
  //     for (let cidx in fmenu.childList) {
  //       let cmenu = fmenu.childList[cidx]
  //       if (cmenu.childList.length > 0) {
  //         for (let sidx in cmenu.childList) {
  //           let smenu = cmenu.childList[sidx]
  //           let path = fmenu.menuUrl + cmenu.menuUrl + smenu.menuUrl
  //           console.log('111111111=' + path)

  //           if (path === to.path) {
  //             hasPerm = true
  //             break
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
  // if (hasPerm) {
  //   next()
  // } else {
  //   next('/404')
  // }
})

// const beforeEachKeys = Object.keys(hooks.beforeEach)

// if (beforeEachKeys.length > 0) {
//   beforeEachKeys.map(hook => {
//     routerInstance.beforeEach(hooks.beforeEach[hook])
//   })
// }

export default routerInstance
