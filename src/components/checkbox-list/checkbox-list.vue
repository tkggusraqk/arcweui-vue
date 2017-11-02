<template>
  <div :class="prefixCls">
    <template v-for="(item,index) in datas">
      <CheckBox :key="index" v-model="item.checked" :textDecoration="item.textDecoration" :model="model" :text="item.text"></CheckBox>
    </template>
  </div>
</template>
<script>
export default {
  name: 'CheckBoxList',
  props: {
    datas: {
      type: Array,
      default() {
        return []
      }
    },
    model: String
  },
  data() {
    return {
      prefixCls: 'arc-weui-checkbox-list'
    }
  },
  methods: {
    checked() {
      this.$('checked')
    }
  }
}
</script>

