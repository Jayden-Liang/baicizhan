import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './router'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { store } from './store/store'

import { 
  faChevronRight,
  faChevronLeft,
  faLongArrowAltLeft,
  faMobileAlt,
} from '@fortawesome/free-solid-svg-icons';
 
import {
  faWeixin,
  faQq
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faChevronRight,
  faChevronLeft,
  faLongArrowAltLeft,
  faMobileAlt,
  faWeixin,
  faQq
);


Vue.use(VueRouter);

const router = new VueRouter({
  routes
})

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
