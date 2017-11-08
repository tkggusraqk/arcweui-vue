<template>
  <div>
    <Navbar :datas="items" v-on:click="click"></Navbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: ['选项1', '选项2', '选项3']
    }
  },
  methods: {
    click(index) {
      this.$msg.info('你点击了:' + this.items[index])
    }
  }
}
</script>

