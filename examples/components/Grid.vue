<template>
  <div>
    <TitleCell :showBorderBottom="false">图片</TitleCell>
    <Grid :datas="datas" v-on:click="clickHandler"></Grid>
    <br>
    <TitleCell :showBorderBottom="false">icon</TitleCell>
    <Grid :datas="iconDatas" v-on:click="clickHandler"></Grid>
    <br>
    <TitleCell :showBorderBottom="false">文字</TitleCell>
    <Grid :datas="textDatas" v-on:click="clickHandler"></Grid>
  </div>
</template>
<script>
export default {
  data() {
    return {
      datas: [],
      iconDatas: [],
      textDatas: []
    }
  },
  mounted() {
    let temps = []
    for (let index = 0; index < Math.ceil(Math.random() * 9 + 1); index++) {
      temps.push({ title: '标题' + index, img: 'https://weui.io/images/icon_tabbar.png' })
    }
    this.datas = temps
    temps = []
    for (let index = 0; index < Math.ceil(Math.random() * 9 + 1); index++) {
      temps.push({ title: '标题' + index, iconClass: 'weui-icon-success' })
    }
    this.iconDatas = temps
    temps = []
    for (let index = 0; index < Math.ceil(Math.random() * 9 + 1); index++) {
      temps.push({ title: '标题' + index })
    }
    this.textDatas = temps
  },
  methods: {
    clickHandler(index) {
      this.$msg.info('你点击了第' + index + '项')
    }
  }
}
</script>
