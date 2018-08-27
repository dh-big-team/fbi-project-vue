import Vue from 'vue'
import Router from 'vue-router'
import hooks from './hooks'

import { Login } from 'views/'
// const Hello = () => import('/views/HelloWorld.vue')
// import NavMenu from '/views//NavMenu.vue'
//import Demo from '@/components/demo'
import Adv from './adv/'
import Function from './function/'
import Demo from './demo/'
import components from './components/'

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
        title: '登录页'
      }
    },
    Function,
    Demo,
    components,
    Adv,
    {
      path: '*',
      redirect: '/'
    }
  ]
})

const beforeEachKeys = Object.keys(hooks.beforeEach)

if (beforeEachKeys.length > 0) {
  beforeEachKeys.map(hook => {
    routerInstance.beforeEach(hooks.beforeEach[hook])
  })
}

export default routerInstance
