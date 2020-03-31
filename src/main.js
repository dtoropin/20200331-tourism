import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";

import Vue from 'vue';
import App from './App.vue'
import store from './store';
import router from './router';
import axios from 'axios';

store.$axios = axios;

import SimpleVueValidation from 'simple-vue-validator';
Vue.use(SimpleVueValidation);

new Vue({
  el: "#app-root",
  router,
  store,
  render: h => h(App)
});