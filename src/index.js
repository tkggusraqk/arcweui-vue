import '@/assets/css/index.less'
import 'core-js/fn/array/find'
import 'core-js/fn/array/find-index'

import Toast from './components/toast'

const ArcWeUi = { Toast }

const install = function(Vue, config = {}) {
  Object.keys(ArcWeUi).forEach(key => {
    Vue.component(key, ArcWeUi[key])
  })
  Vue.prototype.$toast = Toast
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(ArcWeUi, { install })
