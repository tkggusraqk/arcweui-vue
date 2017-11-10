<template>
  <div>
    <Search v-on:search="search" v-model="serarchText"></Search>
    <br>
    <br>
    <br>
    <TitleCell>禁止输入的搜索</TitleCell>
    <br>
    <Search v-on:click="readonlySearch"></Search>
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
    },
    readonlySearch() {
      //禁止输入的搜索
      this.$msg.info('禁止输入的搜索')
    }
  }
}
</script>

