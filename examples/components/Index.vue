<template>
  <div>
    <Button text="Toast" @click="clickHandler('Toast')"></Button>
    <Button text="Button" @click="clickHandler('Button')"></Button>
    <Button text="Badge" @click="clickHandler('Badge')"></Button>
    <Button text="Tag" @click="clickHandler('Tag')"></Button>
    <Button text="TagPanel" @click="clickHandler('TagPanel')"></Button>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    clickHandler(name) {
      this.$router.push(name)
    }
  }
}
</script>

