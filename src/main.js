// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import App from './App'
import router from './router'
import $ from 'jquery'
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false

Vue.use(iview)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  $: $
})
