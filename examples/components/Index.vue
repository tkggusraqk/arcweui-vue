<template>
  <div>
    <a href="javascript:;" @click="clickHandler('Toast')" class="weui-btn weui-btn_primary">
      Toast</a>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    clickHandler(name) {
      this.$router.push(name)
    }
  }
}
</script>

