<template>
  <div class="arc-weui-tag-example">
    <Tag text="职业发展" @click="tagClick" v-on:longtap="longtap" v-on:remove="removeTag"></Tag>
    <Tag text="娱乐休闲" @click="tagClick" :isDefault="true" v-on:remove="removeTag"></Tag>
    <Tag text="学习成长" @click="tagClick" :showClose="true" v-on:remove="removeTag"></Tag>
    <br/>
    <br/>
    <Tag text="默认选中" @click="tagClick" :selected="true" v-on:remove="removeTag"></Tag>
    <Tag text="长按显示删除" @click="tagClick" :enabledLongtap="true" v-on:remove="removeTag"></Tag>
    <br/>
    <br/>
    <Tag text="长按显示删除超出10个汉字" @click="tagClick" :enabledLongtap="true" v-on:remove="removeTag"></Tag>
    <Tag text="不解析html<div></div>" @click="tagClick" :enabledLongtap="true" v-on:remove="removeTag"></Tag>
    <br/>
    <br/>
    <Tag text="解析html<span style='color:red'>这是span</span>" :textIsHtml="true"></Tag>
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

