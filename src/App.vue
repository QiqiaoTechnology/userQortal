<template>
  <div id="app">
    <router-view/>
   
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  min-width: 1000px;
}
.iconfont{
  margin-right: 7px;
}
</style>
