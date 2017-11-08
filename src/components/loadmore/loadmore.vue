<template>
  <div class="weui-loadmore" :class="{'weui-loadmore_line':loadingState==2}">
    <i class="weui-loading" v-if="loadingState==1"></i>
    <span class="weui-loadmore__tips" v-html="tipsText"></span>
  </div>
</template>
<script>
export default {
  name: 'Loadmore',
  props: {
    noDataText: {
      type: String,
      default: '暂无数据'
    },
    loadingText: {
      type: String,
      default: '正在加载'
    },
    loadingState: {
      type: Number,
      default: 1
    }
  },
  computed: {
    tipsText() {
      return this.loadingState === 1 ? this.loadingText : this.noDataText
    }
  },
  data() {
    return {}
  }
}
</script>
