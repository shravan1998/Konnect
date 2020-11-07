import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from "./router"
import alertify from 'alertifyjs'
import VueLocalStorage from 'vue-localstorage'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './quasar'
import './registerServiceWorker'


Vue.config.productionTip = false
Vue.use(VueLocalStorage)
Vue.use(alertify)
//Vue.use(pwa)

new Vue({
  vuetify,
  router,
 
  //alertify,
  //localStorage,
  render: h => h(App)
}).$mount('#app')
