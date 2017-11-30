import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Login from '@/components/Login'
=======
>>>>>>> 3d7a96fff99deeadccb347d286ff1691c1ad4cb4
import Room from '@/components/Room'
import FBSignInButton from 'vue-facebook-signin-button'

// import HelloWorld from '@/components/HelloWorld'
import FBLogin from '@/components/LoginFB'

import '@/assets/semantic/dist/semantic.min.css'
import '@/assets/semantic/dist/jquery.js'
import '@/assets/semantic/dist/semantic.min.js'

Vue.use(Router)
Vue.use(FBSignInButton)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'Login',
      component: Login
    },
    {
      path: '/room',
=======
>>>>>>> 3d7a96fff99deeadccb347d286ff1691c1ad4cb4
      name: 'Room',
      component: Room
    },
    {
      path: '/login',
      name: 'fblogin',
      component: FBLogin
    }
  ]
})
