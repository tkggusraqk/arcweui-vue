<template>
  <div :class="prefixCls">
    <Dialog title="标签" v-model="showDialog" type="confirm">
      <TagPanel :tags="tags" v-on:remove="removeTag" v-on:add-tag="addTag" v-model="newTag" v-on:click="clickHandler"></TagPanel>
    </Dialog>
  </div>
</template>
<script>
export default {
  props: {
    tags: {
      typf: Object,
      default() {
        return {
          default: [],
          customer: []
        }
      }
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value(val) {
      this.showDialog = val
    }
  },
  data() {
    return {
      prefixCls: 'arc-weui-dialog-tag',
      showDialog: this.value,
      newTag: ''
    }
  },
  methods: {
    removeTag(value) {
      this.$emit('remove-tag', value)
    },
    clickHandler(value) {
      this.$emit('click-tag', value)
    },
    addTag() {
      this.$emit('add-tag', this.newTag)
    }
  }
}
</script>
