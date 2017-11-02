<template>
  <div>
    <TitleCell>
      <span>风格：</span>
      <CheckBox v-model="modelChecked1"></CheckBox>
      <CheckBox v-model="modelChecked2" model='2'></CheckBox>
    </TitleCell>
    <TitleCell>我的任务列表：
    </TitleCell>
    <CheckBoxList :datas="datas" :model='model'></CheckBoxList>
  </div>
</template>
<script>
export default {
  data() {
    return {
      datas: [],
      model: '2',
      modelChecked1: false,
      modelChecked2: false
    }
  },
  watch: {
    modelChecked1(val) {
      this.model = val ? '1' : '2'
    },
    modelChecked2(val) {
      this.model = val ? '2' : '1'
    }
  },
  mounted() {
    let temps = []
    for (let index = 0; index < Math.ceil(Math.random() * 20 + 5); index++) {
      temps.push({ 'text': '我的任务' + index, textDecoration: index % 2 === 0 })
    }
    this.datas = temps
  },
  methods: {
  }
}
</script>
<style lang="less">
.arc-weui-title-cell {
  .weui-agree__checkbox {
    top: 6px;
  }
}
</style>

