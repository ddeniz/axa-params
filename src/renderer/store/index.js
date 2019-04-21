import Vue from 'vue';
import Vuex from 'vuex';

import { createPersistedState, createSharedMutations } from 'vuex-electron';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },

  actions: {
    increment(store) {
      console.log('act')
      store.commit("increment")
    },
    decrement(store) {
      console.log('act')
      store.commit("decrement")
    }
  },

  mutations: {
    increment(state) {
      console.log('mut')
      state.count++
    },
    decrement(state) {
      console.log('mut')
      state.count--
    }
  },

  plugins: [createPersistedState(), createSharedMutations()],
  strict: process.env.NODE_ENV !== "production"
})
