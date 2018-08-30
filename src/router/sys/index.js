import { Home } from 'layout/'

import user from './user'

export default {
  path: '/sys',
  name: '系统管理',
  icon: 'inbox',
  component: Home,
  redirect: '/sys/perm',
  children: [user]
}
