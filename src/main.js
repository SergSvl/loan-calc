import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes'
import Vuex from 'vuex';
import {store} from './store/'
import responsive from 'vue-responsive'

Vue.use(Vuex);
Vue.use(VueRouter)
Vue.use(responsive)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

import "./assets/css/reset.css";
