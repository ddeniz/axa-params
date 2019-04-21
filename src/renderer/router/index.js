import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/pages/LandingPage').default,
    },
    {
      path: '/vuetfiy',
      name: 'vuetfiy',
      component: require('@/pages/Vuetfiy').default,
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: require('@/pages/Vuex').default,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
