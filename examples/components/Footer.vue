<template>
  <div>
    <Footer :text="text"></Footer>
    <Footer :text="text" :links="links" v-on:click="linkClick"></Footer>
    <Footer :text="text" :links="links" :isBottom="true" v-on:click="linkClick"></Footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: 'Copyright &copy; 2017-2020 weui.io & ARC',
      links: []
    }
  },
  mounted() {
    let temps = []
    for (let index = 0; index < Math.ceil(Math.random() * 4 + 1); index++) {
      temps.push('友情链接' + index)
    }
    this.links = temps
  },
  methods: {
    linkClick(index) {
      this.$msg.info('你点击了[' + this.links[index] + ']')
    }
  }
}
</script>

