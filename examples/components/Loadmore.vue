<template>
  <div>
    <br>
    <Loadmore></Loadmore>
    <br>
    <Loadmore :loadingState="2"></Loadmore>
    <br>
    <Loadmore loadingText="努力加载中..."></Loadmore>
    <br>
    <Loadmore :loadingState="2" noDataText="我是有底线的"></Loadmore>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
