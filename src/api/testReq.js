import ajax from '@/utils/ajax'

export default {
  echo() {
    return ajax.get('echo/hah').then(response => ajax.responseHandler(response))
  },

  users({ pageNum, pageSize }) {
    return ajax
      .get('/users/' + pageNum + '/' + pageSize)
      .then(response => ajax.responseHandler(response))
  },

  rbMenus(postParam) {
    return ajax
      .post('/rb/menus', postParam)
      .then(response => ajax.responseHandler(response))
  },

  rpMenus({ pageNum, pageSize }) {
    return ajax
      .post('/rp/menus', { pageNum: pageNum, pageSize: pageSize })
      .then(response => ajax.responseHandler(response))
  }
}
