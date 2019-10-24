import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import vuescrollto from 'vue-scrollto';
import AOS from 'aos'
import 'aos/dist/aos.css'


Vue.config.productionTip = false
Vue.use(vuescrollto, { offset: -60 })

new Vue({
  created () {
    AOS.init()
  },
  vuetify,
  router,
  vuescrollto,
  render: h => h(App)
}).$mount('#app')
