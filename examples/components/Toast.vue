<template>
  <div>
    <Button text="Toast" @click="toast" typeClass="weui-btn_primary"></Button>
    <Button text="Toast Error" @click="toastError" typeClass="weui-btn_primary"></Button>
    <Button text="Loading" @click="loading" typeClass="weui-btn_primary"></Button>
    <Button text="重复Toast" @click="repeatToast" typeClass="weui-btn_primary"></Button>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    toast() {
      this.$toast.success('提示信息')
    },
    toastError() {
      this.$toast.error('错误信息')
    },
    loading() {
      let id = this.$toast.loading('数据加载中')
      setTimeout(() => {
        this.$toast.closeLoading(id)
      }, 2000)
    },
    repeatToast() {
      for (let index = 0; index < Math.random() * 10 + 3; index++) {
        this.$toast.success('随机提示信息' + index)
      }
    }
  }
}
</script>

