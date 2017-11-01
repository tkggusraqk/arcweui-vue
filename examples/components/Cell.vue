<template>
  <div>
    <Cell text="标题1" label="右边有导航" @click="cellClick"></Cell>
    <Cell text="标题12" label="右边无导航" :rigthNav="false"></Cell>
    <Cell text="标题12" label="左边带图片" :avatar="avatar"></Cell>
    <Cell text="标题13" label="左边有导航" v-on:go-back="goBack" :rigthNav="false" :leftNav="true"></Cell>
  </div>
</template>
<script>
export default {
  data() {
    return {
      avatar: 'http://pic5.bbzhi.com/qichebizhi/baomamotuoche/baomamotuoche_434453_10.jpg'
    }
  },
  methods: {
    cellClick() {
      this.$toast.success('点击了列')
    },
    goBack() {
      this.$router.back()
    }
  }
}
</script>

