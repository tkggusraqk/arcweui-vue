import '@/assets/css/index.less'
import Toast from './components/toast'
import Button from './components/button'
import Tag from './components/tag'
import Badge from './components/badge'
import TagPanel from './components/tag-panel'
import Dialog from './components/dialog'
import DialogTag from './components/dialog-tag'
import Cell from './components/cell'
import Input from './components/input'
import CheckBox from './components/checkbox'
import CheckBoxList from './components/checkbox-list'
import TitleCell from './components/title-cell'
import VueLazyload from './components/lazyload'

require('core-js')

const ArcWeUi = {
  Toast,
  Button,
  Tag,
  Badge,
  TagPanel,
  Dialog,
  DialogTag,
  Cell,
  Input,
  CheckBox,
  CheckBoxList,
  TitleCell
}

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
