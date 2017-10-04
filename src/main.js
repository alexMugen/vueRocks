// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Material from 'vue-material'
import 'vue-material/dist/vue-material.css'
Vue.config.productionTip = false
Vue.use(Material)
export const HTTP = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/`
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
