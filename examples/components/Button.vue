<template>
  <div>
    <Button text="按钮" @click="clickHandler"></Button>
    <Button text="按钮" @click="clickHandler" typeClass="weui-btn_warn"></Button>
    <Button text="按钮" @click="clickHandler" typeClass="customer-width"></Button>
    <Button text="小按钮" @click="clickHandler" typeClass="weui-btn_mini weui-btn_primary"></Button>
    <Button text="clickDisabled" :clickDisabled="true" v-model="btnDisabled" @click="clickHandler('disabled')"></Button>
    <Button text="clickDisabledLoading" :clickDisabledLoading="true" v-model="btnDisabled" @click="clickHandler('disabled,loading')"></Button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      btnDisabled: true
    }
  },
  methods: {
    clickHandler(type) {
      let msg = '单击了按钮'
      if (type.includes('disabled')) {
        msg += ',3秒后解除禁用'
        setTimeout(() => {
          this.btnDisabled = false
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
  color: black;
}
</style>

