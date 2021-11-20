import { createStore } from 'vuex'

export default createStore({
  state: {
    token: null,
    user: null,
    apiUrl: "http://localhost:8000/api/"
  },
  mutations: {
    setToken(state, n) {
      state.token = n
    },
    setUser(state, n) {
      state.user = n
    },
    setApiUrl(state, url) {
      state.apiUrl = url
    }
  },
  actions: {
  },
  modules: {
  }
})
