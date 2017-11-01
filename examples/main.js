// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ArcWeUI from '@/index.js'
// import ArcWeUI from 'arcweui-vue'
// import 'arcweui-vue/dist/arcweui-vue.min.css'

Vue.use(ArcWeUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
