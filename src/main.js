import Vue from 'vue'
import App from './App.vue'
import createjs from 'createjs'

Vue.config.productionTip = false
Vue.prototype.createjs = createjs

new Vue({
  render: h => h(App),
}).$mount('#app')
