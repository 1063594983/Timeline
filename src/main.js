// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui'
import cookie from 'js-cookie'

Vue.config.productionTip = false
Vue.use(ElementUI);

Vue.prototype.$axios = axios;
Vue.prototype.$cookie = cookie;

Date.prototype.datetime = function() {
	return this.getFullYear() + '-' + ('0' + (this.getMonth() + 1)).slice(-2) + '-' + this.getDate() + ' ' + this.getHours() + ':' + ('0' + (this.getMinutes())).slice(-2) + ':' + this.getSeconds();
};

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
