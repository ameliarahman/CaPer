import Vue from 'vue'
import Router from 'vue-router'
import WellcomePage from '@/components/WellcomePage'
import PlayPage from '@/components/PlayPage'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
