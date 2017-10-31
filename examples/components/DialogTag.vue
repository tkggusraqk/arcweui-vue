<template>
  <div>
    <Button text="设置标签" @click="showDialog"></Button>
    <DialogTag :tags="tags" v-on:remove-tag="removeTag" v-on:click-tag="clickTag" v-on:add-tag="addTag" v-on:dialog-result="dialogResult" v-model="visible" :newTag.sync="newTag"></DialogTag>
  </div>
</template>
<script>

export default {
  data() {
    return {
      tags: {
        default: [],
        customer: []
      },
      newTag: '',
      visible: false
    }
  },
  mounted() {
    this.getTags()
  },
  methods: {
    getTags() {
      //这里是模拟数据，实际业务应该去服务器请求数据
      let length = Math.round(Math.random() * 30) + 5
      for (let index = 0; index < length; index++) {
        this.tags.default.push({ text: '生活娱乐' + index, selected: false, showClose: false, isDefault: true })
      }
      length = Math.round(Math.random() * 5) + 5
      for (let index = 0; index < length; index++) {
        this.tags.customer.push({ text: '职业规划' + index, selected: false, showClose: true, isDefault: false })
      }
    },
    showDialog() {
      // 这里是异步加载
      // this.getTags()
      this.visible = true
    },
    removeTag(value) {
      //根据实际业务处理，成功后移除此tag
      this.tags[value.tag.type].splice(value.tag.tag, 1)
    },
    clickTag(value) {
      console.log(value)
    },
    addTag(newTag) {
      this.tags.customer.push({ text: newTag, selected: false, showClose: true, isDefault: false })
      //根据实际业务处理，添加成功后清除 newtag
      setTimeout(() => {
        this.newTag = ''
      }, 500)
    },
    dialogResult(value) {
      if (value === 1) {
        this.visible = false
      }
    }
  }
}
</script>

