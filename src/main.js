import Vue from 'vue';
import VueRouter from 'vue-router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import Home from './pages/Home.vue';
import Country from './pages/Country.vue';

import './assets/styles/main.styl';

Vue.config.productionTip = false;

library.add(faMoon);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/:alphaCode', component: Country },
  ],
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
