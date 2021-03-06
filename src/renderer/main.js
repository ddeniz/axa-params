import Vue from 'vue';
import axios from 'axios';
import App from './App';
import router from './router';
import store from './store';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import theme from './theme';
import i18n from '../i18n/index';
import 'chartist/dist/chartist.min.css';

Vue.use(Vuetify, {
  iconfont: 'md',
  theme,
});

Vue.use(require('vue-chartist'));
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app');




if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.config.silent = true;
