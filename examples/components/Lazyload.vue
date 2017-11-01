<template>
  <div class="img-lazyload">
    <template v-for="(item,index) in imags">
      <img :key="index" v-lazy="item" />
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imags: []
    }
  },
  mounted() {
    for (var index = 0; index < Math.ceil(Math.random() * 30 + 10); index++) {
      this.imags.push('http://pic.ffpic.com/files/2012/1011/sj1011hua0' + index + '.jpg')
    }
  }
}
</script>
<style scoped lang="less">
.img-lazyload {
  text-align: center;
  img {
    width: 300px;
  }
}
</style>



