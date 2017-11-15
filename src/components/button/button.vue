<template>
  <a href="javascript:;" v-touch:long="longtap" @click="clickHandler" class="weui-btn" :class="[classNames,dynamicClass]">
    <i class="weui-loading" v-show="dynamicClass.includes('weui-btn_loading')"></i>
    <span v-html="text"></span>
    <slot></slot>
  </a>
</template>
<script>
export default {
  name: 'Button',
  props: {
    text: String,
    type: {
      type: String,
      default: 'primary'
    },
    clickDisabled: Boolean,
    clickDisabledLoading: Boolean,
    clearDisabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classNames() {
      let className
      if (!this.type.includes('mini_')) {
        className = 'weui-btn_' + this.type
      } else {
        let types = this.type.split('_')
        className = types.map((item) => { return 'weui-btn_' + item }).toString().replace(/,/g, ' ')
      }
      return className
    }
  },
  watch: {
    clearDisabled(val) {
      if (val) {
        this.dynamicClass = ''
      }
    }
  },
  data() {
    return {
      dynamicClass: ''
    }
  },
  methods: {
    clickHandler() {
      if (this.clickDisabled) {
        this.dynamicClass = 'weui-btn_disabled'
      }
      if (this.clickDisabledLoading) {
        this.dynamicClass = 'weui-btn_disabled weui-btn_loading'
      }
      this.$emit('click')
    },
    longtap() {
      this.$emit('longtap')
    }
  }
}
</script>

