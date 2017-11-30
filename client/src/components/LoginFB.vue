<template>
  <div>
    <div class="ui header inverted">
      <img src="../assets/img/logo.png" alt="logo" class="ui image logo">
      <h1>Caper</h1>
    </div>
    <div class="row room">
      <div class="ui grid stackable centered">
        <div class="seven wide column center aligned">
          <i>Captca Racer, online real time multiplayer game</i>
          <div class="ui hidden divider"></div>
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
      <div class="row room bawah">
      <div class="ui grid stackable centered">
        <div class="seven wide column center aligned">
          <div class="ui hidden divider"></div>
            <ShareFB/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShareFB from '@/components/ShareFB'
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
  },
  components: {
    ShareFB
  }
}
</script>

<style>
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

.bawah {
  margin-top: 10em !important;
}
</style>
