import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from "./router"
import alertify from 'alertifyjs'
//import localStorage from 'vue-localstorage'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  alertify,
  render: h => h(App)
}).$mount('#app')
