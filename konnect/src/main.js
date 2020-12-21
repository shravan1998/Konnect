import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from "./router"
import alertify from 'alertifyjs'
import VueLocalStorage from 'vue-localstorage'
import socketio from 'socket.io';
import VueSocketIO from 'vue-socket.io';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './quasar'
import './registerServiceWorker'


Vue.config.productionTip = false
Vue.use(VueLocalStorage)
Vue.use(alertify)
//Vue.use(pwa)
export const SocketInstance = socketio('http://localhost:8080');

Vue.use(VueSocketIO, SocketInstance)

new Vue({
  vuetify,
  router,
 
  //alertify,
  //localStorage,
  render: h => h(App)
}).$mount('#app')
