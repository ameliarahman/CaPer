import Vue from 'vue'
import Router from 'vue-router'

import WellcomePage from '@/components/WellcomePage'
import PlayPage from '@/components/PlayPage'
import Login from '@/components/Login'
import Room from '@/components/Room'
import FBSignInButton from 'vue-facebook-signin-button'
import FBLogin from '@/components/LoginFB'
import '@/assets/semantic/dist/jquery.js'
import '@/assets/semantic/dist/semantic.min.js'

Vue.use(Router)
Vue.use(FBSignInButton)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'WellcomePage',
      component: WellcomePage
    },
    {
      path: '/play',
      name: 'PlayPage',
      component: PlayPage
    },
    {
      path: '/room',
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
