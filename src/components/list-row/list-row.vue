<template>
  <div :class="prefixCls">
    <template v-for="(item,index) in datas">
      <TitleCell :key="index" v-on:click="clickHandler(index)" :showBorderTop="false" :showBorderBottom="false">
        <div class="weui-cell__bd" v-html="item.title"></div>
        <div class="weui-cell__ft" v-html="item.label"></div>
      </TitleCell>
    </template>
  </div>
</template>
<script>
export default {
  name: 'ListRow',
  props: {
    datas: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      prefixCls: 'arc-weui-list-row'
    }
  },
  methods: {
    clickHandler(index) {
      this.$emit('click', index)
    }
  }
}
</script>
