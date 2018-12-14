import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import login from '@/login'
import register from '@/register'
import userIndex from '@/user_index'

Vue.use(Router)

export default new Router({
	mode: 'history',
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
    }, {
    	path: '/userIndex',
    	name:'userIndex',
    	component: userIndex
    }
  ]
})
