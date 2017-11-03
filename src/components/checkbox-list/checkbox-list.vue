<template>
  <div :class="prefixCls">
    <template v-for="(item,index) in datas">
      <CheckBox :key="index" v-model="item.checked" :textDecoration="item.textDecoration" :model="model" :text="item.text" :is-edit="isEdit" v-on:edit="edit(index)" v-on:del="del(index)"></CheckBox>
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
    model: String,
    isEdit: Boolean
  },
  data() {
    return {
      prefixCls: 'arc-weui-checkbox-list'
    }
  },
  methods: {
    checked() {
      this.$('checked')
    },
    edit(index) {
      this.$emit('edit', index)
    },
    del(index) {
      this.$emit('del', index)
    }
  }
}
</script>

