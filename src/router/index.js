import Vue from 'vue'
import Router from 'vue-router'
import check3 from '@/components/check3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'check3',
      component: check3
    }
  ]
})
