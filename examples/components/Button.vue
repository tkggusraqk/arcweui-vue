<template>
  <div>
    <Button text="按钮" @click="clickHandler"></Button>
    <Button text="按钮" @click="clickHandler" type="warn"></Button>
    <Button text="按钮" @click="clickHandler" type="default" class="customer-width"></Button>
    <Button text="小按钮" @click="clickHandler" type="mini_primary"></Button>
    <Button text="clickDisabled" :clickDisabled="true" :clearDisabled="clearDisabled" @click="clickHandler('disabled')"></Button>
    <Button text="clickDisabledLoading" :clickDisabledLoading="true" :clearDisabled="clearLoading" @click="clickHandler('loading')"></Button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      clearDisabled: false,
      clearLoading: false
    }
  },
  methods: {
    clickHandler(type) {
      this.clearDisabled = false
      this.clearLoading = false
      let msg = '单击了按钮'
      if (type && type.includes('disabled')) {
        msg += ',3秒后解除禁用'
        setTimeout(() => {
          this.clearDisabled = true
        }, 3000)
      }
      if (type && type.includes('loading')) {
        msg += ',3秒后解除禁用'
        setTimeout(() => {
          this.clearLoading = true
        }, 3000)
      }
      this.$toast.success(msg)
    }
  }
}
</script>
<style lang="less">
.customer-width {
  width: 200px;
}
</style>

