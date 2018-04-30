// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import iView from 'iview'
import iviewArea from 'iview-area'
import lodash from 'lodash'
import moment from 'moment'
import 'iview/dist/styles/iview.css'
import './assets/css/layout.scss'
import './mock/mocks'
import plugin from './plugin'

Vue.config.productionTip = false
window.moment = moment
window._ = lodash
Vue.use(plugin)
Vue.use(iView)
Vue.use(iviewArea)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
