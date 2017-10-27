<template>
  <div :class="prefixCls">
    <div>
      <template v-for="(item,index) in tags.default">
        <Tag v-on:remove="removeTag" :tag="index" v-on:click="clickHandler" :key="index" :text="item.text" :showClose="item.showClose" :isDefault="item.isDefault"></Tag>
      </template>
    </div>
    <div>
      <template v-for="(item,index) in tags.customer">
        <Tag v-on:remove="removeTag" :tag="index" v-on:click="clickHandler" :key="index" :text="item.text" :showClose="item.showClose" :isDefault="item.isDefault"></Tag>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TagPanel',
  props: {
    tags: {
      typf: Object,
      default() {
        return {
          default: [],
          customer: []
        }
      }
    }
  },
  data() {
    return {
      prefixCls: 'arc-weui-tag-panel'
    }
  },
  methods: {
    removeTag(name) {
      this.$emit('remove-tag', name)
    },
    clickHandler(value) {
      this.$emit('click-tag', value)
    }
  }
}
</script>

