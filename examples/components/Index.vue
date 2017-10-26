<template>
  <div>
    <Button text="Toast" @click="clickHandler('Toast')" typeClass="weui-btn_primary"></Button>
    <Button text="Button" @click="clickHandler('Button')" typeClass="weui-btn_primary"></Button>
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

