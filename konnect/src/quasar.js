import Vue from 'vue'

import './styles/quasar.sass'
import iconSet from 'quasar/icon-set/material-icons-outlined.js'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import {
  Quasar,
  QBtnToggle
} from 'quasar'


Vue.use(Quasar, {
  config: {},
  plugins: {
  },
  iconSet: iconSet,
  components: {
    QBtnToggle
  }
 })