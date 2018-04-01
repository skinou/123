import Vue from 'vue'
import Router from 'vue-router'
import check5 from '@/components/check5'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'check5',
      component: check5
    }
  ]
})
