import '@/assets/css/index.less'
import 'core-js/fn/array/find'
import 'core-js/fn/array/find-index'
import 'core-js/fn/array/includes'

import Toast from './components/toast'
import Button from './components/button'
import Tag from './components/tag'
import Badge from './components/badge'
import TagPanel from './components/tag-panel'
import Dialog from './components/dialog'
import DialogTag from './components/dialog-tag'
import VueLazyload from './components/lazyload'
import Cell from './components/cell'

const ArcWeUi = { Toast, Button, Tag, Badge, TagPanel, Dialog, DialogTag, Cell }

const install = function(Vue, config = {}) {
  Object.keys(ArcWeUi).forEach(key => {
    Vue.component(key, ArcWeUi[key])
  })
  Vue.prototype.$toast = Toast
  Vue.use(VueLazyload, Object.assign({
    loading: require('./assets/loading-spin.svg'),
    error: require('./assets/loading-error.png'),
    attempt: 3
  }, config.lazyload))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(ArcWeUi, { install })
