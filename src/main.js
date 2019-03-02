import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import store from'./store/index'
import VueBus from 'vue-bus'
import 'styles/reset.css'
import 'styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'


Vue.use(VueAwesomeSwiper)
fastClick.attach(document.body)
Vue.config.productionTip = false
Vue.use(VueBus)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
