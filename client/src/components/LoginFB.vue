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
              <!-- <button class="ui fluid facebook button">
                <i class="facebook icon"></i>
                Login with Facebook
              </button> -->
              <fb-signin-button
                :params="fbSignInParams"
                @success="onSignInSuccess"
                @error="onSignInError">
                <i class="icon facebook f"></i>
                Sign in with Facebook
              </fb-signin-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fbSignInParams: {
        scope: 'email,user_likes',
        return_scopes: true
      }
    }
  },
  methods: {
    onSignInSuccess (response) {
      window.FB.api('/me', {
        fields: 'email, name, id'
      }, dude => {
        this.$store.dispatch('loginFB', dude)
      })
    },
    onSignInError (error) {
      console.log('OH NOES', error)
    }
  }
}
</script>

<style>
.tengah {
    margin-top: 17em !important;
  }

h1 {
  color: black
}

.fb-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #4267b2;
  color: #fff;
  cursor: pointer
}
</style>
