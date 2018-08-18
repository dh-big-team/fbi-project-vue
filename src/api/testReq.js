import ajax from '@/utils/ajax'

export default {
  test() {
    return ajax
      .get('users/fbi-templates/repos')
      .then(response => ajax.responseHandler(response))
  }
}
