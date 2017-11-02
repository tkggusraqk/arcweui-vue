<template>
  <div class="examples-input">
    <Cell text="默认文本框" :rightNav="false"></Cell>
    <Input v-model="inputText" v-on:enter="enter" v-on:clear="clear"></Input>
    <Cell text="行内提交" :rightNav="false"></Cell>
    <Input v-model="inputText" :inSubmit="true" v-on:enter="enter" v-on:clear="clear"></Input>
    <Cell text="多行文本框" :rightNav="false"></Cell>
    <Input v-model="inputText" :inputTotal="false" v-on:enter="enter" v-on:clear="clear" :multiline="5"></Input>
    <Cell text="多行文本框-统计" :rightNav="false"></Cell>
    <Input v-model="inputText" v-on:enter="enter" v-on:clear="clear" :multiline="5"></Input>
    <Cell text="多行文本框-行内提交" :rightNav="false"></Cell>
    <Input v-model="inputText" :inSubmit="true" :maxLength="30" placeholder="30个字符" :inputTotal="false" v-on:enter="enter" v-on:clear="clear" :multiline="5"></Input>
    <Cell text="多行文本框-行内提交-统计" :rightNav="false"></Cell>
    <Input v-model="inputText" :inSubmit="true" v-on:enter="enter" v-on:clear="clear" :multiline="5"></Input>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputText: ''
    }
  },
  methods: {
    enter() {
      this.$toast.success('你提交了:' + this.inputText + ',2秒后清除内容')
      //todo 根据业务处理完成清除内容
      setTimeout(() => {
        this.inputText = ''
      }, 2000)
    },
    clear() {
      this.$toast.success('你清除了输入内容')
    }
  }
}
</script>
<style lang="less">
.examples-input {
  .weui-cell:before {
    border-top: none;
  }
}
</style>


