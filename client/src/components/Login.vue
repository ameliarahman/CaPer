<template>
  <div class="ui container">
    <div class="ui middle aligned column centered grid">
      <div class="twelve wide mobile six wide tablet four wide computer column">
        <div class="">
        <button class="tengah ui fluid facebook button">
          <i class="facebook icon"></i>
          Login with Facebook
        </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
  .tengah {
    margin-top: 300px !important;
  }
</style>
