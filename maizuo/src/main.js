import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/iconfont/iconfont.css"
import "./common/css/reset.css"
import "./common/js/flexble"
import axios from 'axios'
Vue.prototype.$axios=axios
import VueJsonp from 'vue-jsonp';
Vue.use(VueJsonp);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')