import req from '@/api/Req'
// global state
const state = {
  param1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  param2: ['zhangsan', 'lisi', 'zengzhiwei', 'wanglihong', 'zhoujielun'],
  param3: {
    obj1: 'obj1',
    obj2: 'obj2'
  },
  param4: 10,
  param5: 'hello'
}

const getters = {
  //返回param1长度
  param1Length: state => {
    return state.param1.length
  },
  //返回param2长度
  paraLength: state => {
    return state.param2.length
  },
  //按传入的字符过滤param2
  param2InCode: state => code => {
    return state.param2.filter(item => item.indexOf(code) > -1)
  },
  //返回param2中与name相同的项
  param2Byname: state => name => {
    return state.param2.filter(item => item == name)
  },
  //返回指定name的hello
  sayHello: (state, getters) => name => {
    return state.param5 + ':' + getters.param2Byname(name)
  }
}

const mutations = {
  updParam4(state) {
    state.param4 = 20
  },
  pushParam1(state, param) {
    state.param1.push(param)
  }
}

const actions = {
  echo(ctx) {
    return req.echo().then(rep => {
      return rep
    })
  },
  users(ctx, pageNum, pageSize) {
    return req.users(pageNum, pageSize).then(rep => {
      return rep
    })
  },
  rbMenus(ctx, pageParam) {
    return req.rbMenus(pageParam).then(rep => {
      return rep
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
