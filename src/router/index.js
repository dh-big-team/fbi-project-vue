import Vue from 'vue'
import Router from 'vue-router'
import hooks from './hooks'

import { Login, Function } from 'views/'
import { Home, TestHome } from 'layout/'
// import Adv from './adv/'
// import Functions from './function/'
// import Demo from './demo/'
// import Components from './components/'
import Sys from './sys/'

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
    },
    Sys
  ]
})

routerInstance.beforeEach((to, from, next) => {
  console.log('----to', to)
  console.log('-----from', from)

  next()
})

const beforeEachKeys = Object.keys(hooks.beforeEach)

if (beforeEachKeys.length > 0) {
  beforeEachKeys.map(hook => {
    routerInstance.beforeEach(hooks.beforeEach[hook])
  })
}

export default routerInstance
