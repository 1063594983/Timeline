import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import login from '@/login'
import register from '@/register'
import userIndex from '@/user_index'
import userInfo from '@/user_info'
import userHeader from '@/user-header'

Vue.use(Router)

const router = new Router({
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
    	path: '/user_index',
    	name:'userIndex',
    	meta: {
    		requireAuth: true
    	},
    	component: userIndex
    },  {
    	path: '/user_info',
    	name: 'userInfo',
    	component: userInfo
    }
  ]
})

router.beforeEach((to, from, next) => {
	if(to.meta.requireAuth) {
		if(new Vue().$cookie.get("token")) {
			next();
		} else {
			next({
				path: "/login"
			})
		}
	} else {
		next();
	}
})

export default router;