<template>
  <div class="weui-cells" :class="[prefixCls,!showBorderTop?'clear-top':'']">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'TitleCell',
  props: {
    showBorderTop: Boolean
  },
  data() {
    return {
      prefixCls: 'arc-weui-title-cell'
    }
  }
}
</script>

