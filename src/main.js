import Vue from 'vue'
import VueRouter from 'vue-router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import Routes from "./routes";

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue'

// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(VueRouter, BootstrapVue);

const router = new VueRouter({ routes: Routes});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
