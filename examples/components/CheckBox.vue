<template>
  <div>
    <Cell text="不带text" :rightNav="false"></Cell>
    <CheckBox v-model="checked"></CheckBox>
    <div>
      CheckBox 状态：{{checked}}
    </div>
    <Cell text="带text" :rightNav="false"></Cell>
    <CheckBox v-model="checked0" text="同意此协议"></CheckBox>
    <Cell text="正方形风格" :rightNav="false"></Cell>
    <CheckBox v-model="checked1" model='2' text="同意此协议"></CheckBox>
    <Cell text="带删除线" :rightNav="false"></Cell>
    <CheckBox v-model="checked2" model='2' :textDecoration="true" text="同意此协议"></CheckBox>
    <TitleCell>不可用</TitleCell>
    <CheckBox v-model="checked" :enabled="false" text="不可操作"></CheckBox>
    <CheckBox :value="true" :enabled="false" text="不可操作"></CheckBox>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: false,
      checked0: false,
      checked1: false,
      checked2: false
    }
  },
  watch: {
    checked(val) {
      console.log('状态发生变化啦')
      //to do
    }
  }
}
</script>

