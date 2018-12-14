import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import login from '@/login'
import register from '@/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: "/login"
    }, {
    	path: '/login',
    	name: 'login',
    	component: login
    }, {
    	path: '/register',
    	name: 'register',
    	component: register
    }
  ]
})
