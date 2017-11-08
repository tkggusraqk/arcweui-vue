<template>
  <div class="weui-grids">
    <a href="javascript:;" class="weui-grid" v-for="(item,index) in datas" :key="index" @click="clickHandler(index)">
      <div class="weui-grid__icon" v-if="item.img || item.iconClass">
        <img v-if="item.img" v-lazy="item.img" alt="">
        <i v-if="item.iconClass" :class="item.iconClass"></i>
      </div>
      <p class="weui-grid__label" v-html="item.title">
      </p>
    </a>
  </div>
</template>
<script>
export default {
  name: 'Grid',
  props: {
    datas: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    clickHandler(index) {
      this.$emit('click', index)
    }
  }
}
</script>
<style lang="less">
.weui-grids {
  .weui-icon-success::before,
  .weui-icon-warn::before {
    color: inherit;
  }
}
</style>


