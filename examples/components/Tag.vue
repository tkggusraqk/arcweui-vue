<template>
  <div class="arc-weui-tag-example">
    <Tag text="职业发展" @click="tagClick" v-on:longtap="longtap" v-on:remove="removeTag"></Tag>
    <Tag text="娱乐休闲" @click="tagClick" :isDefault="true" v-on:remove="removeTag"></Tag>
    <Tag text="学习成长" @click="tagClick" :showClose="true" v-on:remove="removeTag"></Tag>
    <br/>
    <br/>
    <div v-text="selectTags.toString()"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectTags: []
    }
  },
  methods: {
    tagClick(value) {
      if (value.activated) {
        this.selectTags.push(value.text)
      } else {
        this.selectTags = this.selectTags.filter(item => item !== value.text)
      }
    },
    removeTag(text) {
      this.$toast.success('删除tag' + text)
    },
    longtap() {
      console.log('....')
    }
  }
}
</script>
<style lang="less">
.arc-weui-tag-example {
  padding-top: 10px;
}
</style>

