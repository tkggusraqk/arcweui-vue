import '@/assets/css/index.less'
import '@/assets/js/utils'
import Toast from './components/toast'
import Msg from './components/msg'
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
import ListRow from './components/list-row'
import Flex from './components/flex'
import FlexItem from './components/flex-item'
import Footer from './components/footer'
import Grid from './components/grid'
import Loadmore from './components/loadmore'
import Navbar from './components/navbar'
import Tabbar from './components/tabbar'
import Search from './components/search'
import Calendar from './components/calendar'
import VueLazyload from './components/lazyload'
import Multiselect from './components/dropdown'
import VueTouch from 'vue-directive-touch'

require('core-js')

const ArcWeUi = {
  Toast,
  Msg,
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
  TitleCell,
  ListRow,
  Multiselect,
  Flex,
  FlexItem,
  Footer,
  Grid,
  Loadmore,
  Navbar,
  Tabbar,
  Search
}

const install = function(Vue, config = {}) {
  Object.keys(ArcWeUi).forEach(key => {
    Vue.component(key, ArcWeUi[key])
  })
  Vue.prototype.$toast = Toast
  Vue.prototype.$msg = Msg
  Vue.use(VueLazyload, Object.assign({
    loading: require('./assets/loading-spin.svg'),
    error: require('./assets/loading-error.png'),
    attempt: 3
  }, config.lazyload))
  Vue.use(Calendar, { locale: 'zh' })
  Vue.use(VueTouch)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(ArcWeUi, { install })
