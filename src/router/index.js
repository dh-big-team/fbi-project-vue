import Vue from 'vue'
import Router from 'vue-router'
import hooks from './hooks'

import { Login } from 'views/'
// import Adv from './adv/'
// import Functions from './function/'
// import Demo from './demo/'
// import Components from './components/'
import Sys from './sys/'
import { networkInterfaces } from 'os'

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
    Sys
  ]
})

routerInstance.beforeEach((to, from, next) => {
  console.log('----to', to)
  console.log('-----from', from)
  console.log('userinfo=', this.$store.state.user.userinfo)
  next()
})

const beforeEachKeys = Object.keys(hooks.beforeEach)

if (beforeEachKeys.length > 0) {
  beforeEachKeys.map(hook => {
    routerInstance.beforeEach(hooks.beforeEach[hook])
  })
}

export default routerInstance
