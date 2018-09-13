import { alias } from 'views/'
import { Home, Content } from 'layout/'

//将menuList转化为rounterMenu
export default function(params) {
  let menuList = []
  if (params && params.menuList) {
    params.menuList.forEach(element => {
      if (element) {
        let path = element.menuUrl.split('/').pop()
        let menu = {
          path: '/' + path,
          name: element.menuName,
          meta: {
            title: element.menuName
          },
          icon: element.menuIco,
          component: alias[path]
        }
        if (element.childList.length > 0) {
          let redirect = element.menuUrl + element.childList[0].menuUrl
          let children = getChild(element.childList, element.menuUrl)
          menu.component = Home
          menu.redirect = redirect
          menu.children = children
          //delete menu.meta
        }
        menuList.push(menu)
      }
    })
  }
  return menuList
}

function getChild(childList, parentUrl) {
  let child = []
  childList.forEach(element => {
    if (element) {
      let path = element.menuUrl.split('/').pop()
      let menu = {
        path: path,
        name: element.menuName,
        icon: element.menuIco,
        component: alias[path]
      }
      if (element.childList.length > 0) {
        let redirect =
          parentUrl + element.menuUrl + element.childList[0].menuUrl
        let children = getChild(element.childList, element.menuUrl)
        menu.path = path
        menu.component = Content
        menu.redirect = redirect
        menu.children = children
        //delete menu.meta
      }
      child.push(menu)
    }
  })
  return child
}
