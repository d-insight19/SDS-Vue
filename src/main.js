
/* eslint-disable*/
import './init'
import App from './App'
import Vue from 'vue'
// import '@/lib/fdp/static/css/fdp-component.css'
// import '@/lib/fdp/static/css/normalize.css'
import '@/assets/css/css.css'
import '@/assets/js/extension.js'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
