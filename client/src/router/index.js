import Vue from 'vue'
import Router from 'vue-router'
import WellcomePage from '@/components/WellcomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WellcomePage',
      component: WellcomePage
    }
  ]
})
