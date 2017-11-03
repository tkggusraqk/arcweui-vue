<template>
  <div>
    <Button text="错误提示信息" @click="clickHandler('error')"></Button>
    <Button text="成功提示信息" @click="clickHandler('success')"></Button>
  </div>
</template>
<script>
export default {
  methods: {
    clickHandler(type) {
      if (type === 'error') {
        this.$msg.error('验证失败')
      } else {
        this.$msg.info('操作成功')
      }
    }
  }
}
</script>

