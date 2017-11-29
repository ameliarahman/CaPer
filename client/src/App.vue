<template>
  <div id="app">
    <div class="ui container">
      <div class="ui grid stackable centered">
        <router-view/>
      </div>
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #73EDD4;
  margin-top: 60px;
}

body {
  background: #1d2d47;
}
</style>
