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
