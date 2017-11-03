<template>
  <div class="examples-index">
    <Button text="Toast" @click="clickHandler('Toast')"></Button>
    <Button text="Button" @click="clickHandler('Button')"></Button>
    <Button text="Badge" @click="clickHandler('Badge')"></Button>
    <Button text="Tag" @click="clickHandler('Tag')"></Button>
    <Button text="TagPanel" @click="clickHandler('TagPanel')"></Button>
    <Button text="Dialog" @click="clickHandler('Dialog')"></Button>
    <Button text="DialogTag" @click="clickHandler('DialogTag')"></Button>
    <Button text="Lazyload" @click="clickHandler('Lazyload')"></Button>
    <Button text="Cell" @click="clickHandler('Cell')"></Button>
    <Button text="Input" @click="clickHandler('Input')"></Button>
    <Button text="CheckBox" @click="clickHandler('CheckBox')"></Button>
    <Button text="CheckBoxList" @click="clickHandler('CheckBoxList')"></Button>
    <Button text="TitleCell" @click="clickHandler('TitleCell')"></Button>
    <Button text="Msg" @click="clickHandler('Msg')"></Button>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    clickHandler(name) {
      this.$parent.title = name
      this.$router.push(name)
    }
  }
}
</script>
<style lang="less" scoped>
.examples-index {
  text-align: center;
  .weui-btn {
    width: 40%;
    display: inline-block;
    margin-right: 10px;
  }
}
</style>


