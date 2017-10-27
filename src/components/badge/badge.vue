<template>
  <span class="weui-badge" :class="{'weui-badge_dot':isDot}" v-html="text">
  </span>
</template>
<script>
export default {
  name: 'Badge',
  props: {
    text: String,
    isDot: Boolean
  },
  data() {
    return {}
  }
}
</script>

