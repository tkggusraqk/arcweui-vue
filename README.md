# arcweui-vue
weui的vue版本
# 说明
样式依赖weui css，[weui链接地址](https://github.com/Tencent/weui/wiki/getting-started)

#扫码快速体验

   ![enter image description here](https://tkggusraqk.github.io/arcweuivue-demo/QRCode.png)

   [线上地址](https://tkggusraqk.github.io/arcweuivue-demo/#/)

#安装/使用

   npm install arcweui-vue --save

   main.js 引入依赖：
``` javascript
import ArcWeUI from 'arcweui-vue'
import 'arcweui-vue/dist/arcweui-vue.min.css'
Vue.use(ArcWeUI)
```
   具体使用请到github 下载项目看examples

#已实现组件

   toast

   button

   badge

   tag(longtap)

   tag-panel

   dialog

   dialog-tag

   lazyload(vue-lazyload)

   cell

   title-cell

   checkbox

   checkbox-list

   input

   msg

   list-row(单行数据列表)

   flex

   grid

   footer

   dropdown

   Loadmore

   Navbar

   Tabbar

   Search

   Calendar(vue-event-calendar-ext)

   Picker

   TimerPicker


## Links

- [Vue](https://github.com/vuejs/vue)
- [Webpack](https://github.com/webpack/webpack)
- [vue-lazyload](https://github.com/hilongjw/vue-lazyload)
- [i-view](https://github.com/iview/iview)
- [vue-multiselect](https://github.com/monterail/vue-multiselect)
- [vue-event-calendar-ext](https://github.com/tkggusraqk/vue-event-calendar)
- [vue-directive-touch](https://github.com/BensonDu/vue-directive-touch)
- [cube-ui](https://github.com/didi/cube-ui)

## 更新内容
###1.0.24
- tag,tagpanel,dialog-panel组件增加text是否解析为html属性（textIsHtml）以及maxlength,selected,enabledLongtap属性
###1.0.23
- tag组件添加属性maxLength,控制超出文本显示...，默认是10个汉字
###1.0.22
- input组件添加属性enterSubmit（默认回车提交）
###1.0.21
- 添加长按删除控制选项
- 修复默认选中tag无效bug
- 修复长按显示浏览器快捷菜单问题
