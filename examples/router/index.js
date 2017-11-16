import Vue from 'vue'
import Router from 'vue-router'

// 路由配置
let components = []
components.push({ component: 'Index', name: 'Index', path: '/' })
components.push({ component: 'Toast', name: 'Toast', path: '/Toast' })
components.push({ component: 'Button', name: 'Button', path: '/Button' })
components.push({ component: 'Tag', name: 'Tag', path: '/Tag' })
components.push({ component: 'Badge', name: 'Badge', path: '/Badge' })
components.push({ component: 'TagPanel', name: 'TagPanel', path: '/TagPanel' })
components.push({ component: 'Dialog', name: 'Dialog', path: '/Dialog' })
components.push({ component: 'DialogTag', name: 'DialogTag', path: '/DialogTag' })
components.push({ component: 'Lazyload', name: 'Lazyload', path: '/Lazyload' })
components.push({ component: 'Cell', name: 'Cell', path: '/Cell' })
components.push({ component: 'Input', name: 'Input', path: '/Input' })
components.push({ component: 'CheckBox', name: 'CheckBox', path: '/CheckBox' })
components.push({ component: 'CheckBoxList', name: 'CheckBoxList', path: '/CheckBoxList' })
components.push({ component: 'TitleCell', name: 'TitleCell', path: '/TitleCell' })
components.push({ component: 'Msg', name: 'Msg', path: '/Msg' })
components.push({ component: 'ListRow', name: 'ListRow', path: '/ListRow' })
components.push({ component: 'Dropdown', name: 'Dropdown', path: '/Dropdown' })
components.push({ component: 'Flex', name: 'Flex', path: '/Flex' })
components.push({ component: 'Footer', name: 'Footer', path: '/Footer' })
components.push({ component: 'Grid', name: 'Grid', path: '/Grid' })
components.push({ component: 'Loadmore', name: 'Loadmore', path: '/Loadmore' })
components.push({ component: 'Navbar', name: 'Navbar', path: '/Navbar' })
components.push({ component: 'Tabbar', name: 'Tabbar', path: '/Tabbar' })
components.push({ component: 'Search', name: 'Search', path: '/Search' })
components.push({ component: 'Calendar', name: 'Calendar', path: '/Calendar' })
components.push({ component: 'Picker', name: 'Picker', path: '/Picker' })
components.push({ component: 'TimerPicker', name: 'TimerPicker', path: '/TimerPicker' })

let routerObj = []
for (let index = 0; index < components.length; index++) {
  let element = components[index]
  routerObj.push({
    path: element.path,
    name: element.name,
    component: () =>
      import ('../components/' + element.component)
  })
}

Vue.use(Router)

export default new Router({
  routes: routerObj
})
