<template>
  <div v-show="visible" :class="prefixCls">
    <div class="weui-mask"></div>
    <div class="weui-dialog">
      <div class="weui-dialog__hd" :id="dlgTitleId">
        <strong class="weui-dialog__title" v-text="title"></strong>
      </div>
      <div class="weui-dialog__bd" :style="contentHeight>0?'height:'+contentHeight+'px':''" :id="dlgContentId">
        <template v-if="content">
          {{content}}
        </template>
        <slot v-else></slot>
      </div>
      <div class="weui-dialog__ft" :id="dlgFooterId">
        <template v-for="(item,index) in buttons">
          <a href="javascript:;" @click="clickHandler(index)" :key="index" class="weui-dialog__btn" :class="getTypeClass(item,index)">{{getBtnText(item)}}</a>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'alert'
    },
    value: Boolean,
    title: {
      type: String,
      default: '提示'
    },
    content: String,
    buttons: {
      type: Array,
      default() {
        return this.type === 'alert' ? ['确定'] : ['取消', '确定']
      }
    }
  },
  watch: {
    value(val) {
      this.visible = val
    },
    visible(val) {
      if (this.dialogHeight === 0) {
        //为了解决 调用时在 mounted 生命周期 渲染数据，得不到元素实际高度
        this.$nextTick(() => {
          this.checkContentHeight()
        })
      }
    }
  },
  data() {
    return {
      visible: this.value,
      prefixCls: 'arc-weui-dialog',
      dlgContentId: 'content' + new Date().getTime(),
      dlgTitleId: 'title' + new Date().getTime(),
      dlgFooterId: 'footer' + new Date().getTime(),
      contentHeight: 0,
      dialogHeight: 0
    }
  },
  methods: {
    getTypeClass(btn, index) {
      if (typeof btn === 'string') {
        return 'weui-dialog__btn_' + (index !== this.buttons.length - 1 ? 'default' : 'primary')
      } else {
        return 'weui-dialog__btn_' + btn.type
      }
    },
    getBtnText(btn) {
      if (typeof btn === 'string') {
        return btn
      } else {
        return btn.text
      }
    },
    clickHandler(index) {
      if (this.type === 'alert') {
        this.visible = false
        this.$emit('input', this.visible)
      } else {
        if (this.buttons[index] === '取消') {
          this.visible = false
          this.$emit('input', this.visible)
        }
      }
      this.$emit('click', index)
    },
    checkContentHeight() {
      let content = document.getElementById(this.dlgContentId)
      let title = document.getElementById(this.dlgTitleId)
      let footer = document.getElementById(this.dlgFooterId)
      this.dialogHeight = content.offsetHeight + title.offsetHeight + footer.offsetHeight
      if (this.dialogHeight > window.innerHeight) {
        this.contentHeight = window.innerHeight - (title.offsetHeight + footer.offsetHeight) * 2 - 22
      }
    }
  }
}
</script>
