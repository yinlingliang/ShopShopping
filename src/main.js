// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App';
import router from './router';
import fontAwesome from './assets/font-awesome/css/font-awesome.min.css'
import axios from 'axios'
Vue.prototype.$axios = axios;
// 过滤
import {currency} from './util/currency'

Vue.filter("currency",currency);

FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
