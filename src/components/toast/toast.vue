<template>
  <div :id="msgInfo.id" :class="prefixCls">
    <div class="weui-mask_transparent"></div>
    <div class="weui-toast">
      <i class="weui-icon_toast" :class="iconClass"></i>
      <p class="weui-toast__content">{{msgInfo.msg}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Toast',
  computed: {
    iconClass() {
      let className = ''
      switch (this.msgInfo.type) {
        case 'error':
          className = 'weui-icon-cancel'
          break
        case 'success':
          className = 'weui-icon-success-no-circle'
          break
        case 'loading':
          className = 'weui-loading'
          break
      }
      return className
    }
  },
  data() {
    return {
      visible: false,
      prefixCls: 'arc-weui-toast',
      msgInfo: {

      }
    }
  }
}
</script>
