<template>
  <div id="app">
    <header>ARC WX Component Demo</header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
header {
  position: fixed;
  z-index: 1000;
  width: 100%;
  top: 0px;
  background: white;
  padding: 10px;
}

.container {
  margin-top: 50px;
  z-index: 1;
}
</style>
