import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Home from './pages/Home.vue';
import Country from './pages/Country.vue';

import './assets/styles/main.styl';

Vue.config.productionTip = false;

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
