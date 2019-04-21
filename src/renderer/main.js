import Vue from 'vue';
import axios from 'axios';
import App from './App';
import router from './router';
import store from './store';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import theme from './theme';
import i18n from '../i18n/index';
import { sync } from 'vuex-router-sync';
import 'chartist/dist/chartist.min.css';

// Sync store with router
sync(store, router);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app');


Vue.use(require('vue-chartist'));

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.config.silent = true;
Vue.use(Vuetify, {
  iconfont: 'md',
  theme,
});
