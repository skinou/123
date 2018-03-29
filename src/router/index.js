import Vue from 'vue'
import Router from 'vue-router'
import check from '@/components/check'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'check',
      component: check
    }
  ]
})
