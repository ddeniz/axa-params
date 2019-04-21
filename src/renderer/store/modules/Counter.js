const state = {
  count: 0
}

const actions = {
  increment(store) {
    store.commit("increment")
  },
  decrement(store) {
    store.commit("decrement")
  }
}

const mutations = {
  increment(state) {
    state.count++
  },
  decrement(state) {
    state.count--
  }
}

export default {
  state,
  mutations,
  actions,
};
