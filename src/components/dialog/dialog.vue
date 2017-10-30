<template>
  <div v-show="visible" :class="prefixCls">
    <div class="weui-mask"></div>
    <div class="weui-dialog">
      <div class="weui-dialog__hd">
        <strong class="weui-dialog__title" v-text="title"></strong>
      </div>
      <div class="weui-dialog__bd" :id="dlgContentId">
        <template v-if="content">
          {{content}}
        </template>
        <slot v-else></slot>
      </div>
      <div class="weui-dialog__ft">
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
    }
  },
  data() {
    return {
      visible: this.value,
      prefixCls: 'arc-weui-dialog',
      dlgContentId: new Date().getTime()
    }
  },
  mounted() {
    let dom = document.getElementById(this.dlgContentId)
    dom.addEventListener('DOMNodeInserted', (e) => {
      this.checkContentHeight()
    })
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
      let dom = document.getElementById(this.dlgContentId)
      console.log('dom-height:' + dom.offsetHeight)
    }
  }
}
</script>
