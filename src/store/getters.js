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

export default {
  namespaced: true,
  state,
  getters
}
