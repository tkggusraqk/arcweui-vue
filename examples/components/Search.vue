<template>
  <div>
    <Search v-on:search="search" v-model="serarchText"></Search>
  </div>
</template>
<script>
export default {
  data() {
    return {
      serarchText: ''
    }
  },
  methods: {
    search() {
      //to do 这里去处理业务
      if (this.serarchText) {
        this.$msg.info('搜索内容:' + this.serarchText)
      }
    }
  }
}
</script>

