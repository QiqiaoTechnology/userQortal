
import Vue from 'vue'
import Router from 'vue-router'

import temptwoRouter from './home'
// import productRoutes from './product'
import tempRouter from './solution'
import temp3Router from './temp3'
import errorRoutes from './error'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: '',
      component: resolve => require(['@/views/index'], resolve)
    },
    {
      path: '/template_1/menu',
      name: 'template_1',
      component: resolve => require(['@/views/temp1/Main'], resolve),
      children: tempRouter,
    },
    {
      path: '/template_2/menu',
      name: 'template_2',
      component: resolve => require(['@/views/temp2/Main'], resolve),
      children: temptwoRouter,
    },
    {
      path: '/template_3/menu/',
      name: 'template_3',
      component: resolve => require(['@/views/temp3/Main'], resolve),
      children: temp3Router,
    },
    

    ...errorRoutes
  ]
})

router.beforeEach((to, from, next) => {
    window.scroll(0,0);
    next();
})

export default router