import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: require('@/pages/LandingPage').default,
    },
    {
      path: '/vuetfiy',
      name: 'Vuetfiy Example',
      component: require('@/pages/Vuetfiy').default,
    },
    {
      path: '/vuex',
      name: 'Vuex Example',
      component: require('@/pages/Vuex').default,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
