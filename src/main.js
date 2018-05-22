import Vue from 'vue'
import App from './App'
import router from './router'
import Plugin from 'src/service/Plugin'

Vue.config.productionTip = false

Vue.use(Plugin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
