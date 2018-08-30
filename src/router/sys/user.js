/**
 * Created by sailengsi on 2017/5/11.
 */

import { Content } from 'layout/'

import { Sys } from 'views/'

export default {
  path: 'perm',
  name: '权限管理',
  icon: 'inbox',
  component: Content,
  redirect: '/sys/perm/user',
  children: [
    {
      path: 'user',
      name: '用户管理',
      icon: 'bar-chart',
      component: Sys.User.User,
      meta: {
        title: '用户管理'
      }
    },
    {
      path: 'role',
      name: '角色管理',
      icon: 'bar-chart',
      component: Sys.User.Role
    },
    {
      path: 'menu',
      name: '菜单管理',
      icon: 'bar-chart',
      component: Sys.User.Menu
    }
  ]
}
