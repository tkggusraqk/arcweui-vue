<template>
  <a href="javascript:;" @click="clickHandler" class="weui-btn" :class="classNames">
    <i class="weui-loading" v-show="showLoading"></i>
    <span v-html="text"></span>
  </a>
</template>
<script>
export default {
  props: {
    text: String,
    typeClass: {
      type: String,
      default: 'weui-btn_primary'
    },
    clickDisabled: Boolean,
    clickDisabledLoading: Boolean,
    value: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    value(val) {
      if (!val) {
        this.classNames = this.classNames.replace('weui-btn_disabled', '').replace('weui-btn_loading', '')
        this.showLoading = false
      }
    }
  },
  data() {
    return {
      classNames: this.typeClass,
      showLoading: false
    }
  },
  methods: {
    clickHandler() {
      if (this.clickDisabled) {
        this.classNames += ' weui-btn_disabled'
      }
      if (this.clickDisabledLoading) {
        this.showLoading = true
        this.classNames += ' weui-btn_disabled weui-btn_loading'
      }
      this.$emit('click')
    }
  }
}
</script>

