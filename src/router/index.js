import Vue from 'vue'
import Router from 'vue-router'
import hooks from './hooks'

import { Login, Home, About } from '@/views/'
// const Home = () =>
//   import('@/views/Home.vue' /* webpackChunkName: "chunk-home" */)
// const About = () =>
//   import('@/views/About.vue' /* webpackChunkName: "chunk-about" */)
const Hello = () => import('@/components/HelloWorld.vue')
import NavMenu from '@/components/NavMenu.vue'
import Demo from '@/components/demo'

// import Home from '@/views/Home.vue'
// import About from '@/views/About.vue'

Vue.use(Router)

const routerInstance = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: {
        title: '登录页'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: '登录页'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: 'About'
      }
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello,
      meta: {
        title: 'hello'
      }
    },
    {
      path: '/menu',
      name: 'menu',
      component: NavMenu,
      meta: {
        title: '导航菜单'
      },
      children: [
        { path: 'about', component: About },
        { path: '', component: Demo }
      ]
    },
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
