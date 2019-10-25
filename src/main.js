import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import vuescrollto from 'vue-scrollto';
import AOS from 'aos'
import 'aos/dist/aos.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
library.add(fas, far, faGithub);
Vue.component('v-fa', FontAwesomeIcon);

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
