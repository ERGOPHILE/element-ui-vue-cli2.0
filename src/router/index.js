import Vue from 'vue'
import Router from 'vue-router'
import ModifyCar from '@/components/ModifyCar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ModifyCar',
      component: ModifyCar
    }
  ]
})
