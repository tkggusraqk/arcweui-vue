<template>
  <div>
    <TagPanel :tags="tags"></TagPanel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tags: {
        default: [],
        customer: []
      }
    }
  },
  mounted() {
    let length = Math.round(Math.random() * 5) + 5
    for (let index = 0; index < length; index++) {
      this.tags.default.push({ text: '职业规划' + index, selected: false, showClose: false, isDefault: true })
    }
    length = Math.round(Math.random() * 5) + 5
    for (let index = 0; index < length; index++) {
      this.tags.customer.push({ text: '职业规划' + index, selected: false, showClose: true, isDefault: false })
    }
  }
}
</script>
