<template>
  <div class="weui-toptips js_tooltips" :class="[prefixCls,iconClass]">
    <i :class="typeClass" v-if="message.type"></i>
    <span v-text="message.msg"></span>
  </div>
</template>
<script>
export default {
  name: 'Msg',
  data() {
    return {
      prefixCls: 'arc-weui-msg',
      message: {}
    }
  },
  computed: {
    iconClass() {
      let iconClass = 'weui-toptips_success'
      if (this.message.type === 'error') {
        iconClass = 'weui-toptips_warn'
      }
      return iconClass
    },
    typeClass() {
      if (this.message.type === 'error') {
        return 'weui-icon-warn'
      } else {
        return 'weui-icon-success'
      }
    }
  }
}
</script>

