<template>
  <div>
    <a href="javascript:;" @click="toast" class="weui-btn weui-btn_primary">Toast</a>
    <a href="javascript:;" @click="toastError" class="weui-btn weui-btn_primary">Toast Error</a>
    <a href="javascript:;" @click="loading" class="weui-btn weui-btn_primary">Loading</a>
    <a href="javascript:;" @click="repeatToast" class="weui-btn weui-btn_primary">重复Toast</a>
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

