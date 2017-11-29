<template>
  <div class="ui container tengah">
    <div class="ui grid stackable centered">
      <div class="thirteen wide column center aligned">
        <div class="ui header inverted">
          <img src="../assets/img/logo.png" alt="logo" class="ui image logo">
          <h1>CAPER</h1>
        </div>
        <div class="row">
          <div class="ui grid stackable centered">
            <div class="seven wide column center aligned">
              <p>Captca Racer, online real time multiplayer game</p>
              <br>
              <button class="ui fluid facebook button">
                <i class="facebook icon"></i>
                Login with Facebook
              </button>
            </div>
          </div>
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
    margin-top: 10em !important;
  }

  h1 {
    color: black
  }
</style>
