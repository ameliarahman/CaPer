<template>
  <div class="ui sidebar">
    <div class="ui left demo vertical inverted sidebar labeled icon menu">
      <router-link to="/" class="item">
        <i class="home icon"></i>
        Home
      </router-link>
      <a class="item">
        <i class="smile icon"></i>
        History
      </a>
      <router-link to="/logout" class="item">
        <i class="block layout icon"></i>
        Logout
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
