<template>
  <div>
    <Button text="Toast" @click="clickHandler('Toast')"></Button>
    <Button text="Button" @click="clickHandler('Button')"></Button>
    <Button text="Badge" @click="clickHandler('Badge')"></Button>
    <Button text="Tag" @click="clickHandler('Tag')"></Button>
    <Button text="TagPanel" @click="clickHandler('TagPanel')"></Button>
    <Button text="Dialog" @click="clickHandler('Dialog')"></Button>
    <Button text="DialogTag" @click="clickHandler('DialogTag')"></Button>
    <Button text="Lazyload" @click="clickHandler('Lazyload')"></Button>
    <Button text="Cell" @click="clickHandler('Cell')"></Button>
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

