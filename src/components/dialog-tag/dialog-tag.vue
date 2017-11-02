<template>
  <div :class="prefixCls">
    <Dialog title="标签" v-model="showDialog" @click="dialogResult" type="confirm">
      <TagPanel :tags="tags" v-on:remove-tag="removeTag" v-on:add-tag="addTag" v-model="addTagText" v-on:click-tag="clickHandler"></TagPanel>
    </Dialog>
  </div>
</template>
<script>
export default {
  name: 'DialogTag',
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
    },
    newTag: {
      type: String,
      default: ''
    }
  },
  watch: {
    value(val) {
      this.showDialog = val
    },
    showDialog(val) {
      this.$emit('input', val)
    },
    newTag(val) {
      this.addTagText = val
    },
    addTagText(val) {
      this.$emit('update:newTag', val)
    }
  },
  data() {
    return {
      prefixCls: 'arc-weui-dialog-tag',
      showDialog: this.value,
      addTagText: this.newTag
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
      this.$emit('add-tag', this.addTagText)
    },
    dialogResult(value) {
      this.$emit('dialog-result', value)
    }
  }
}
</script>
