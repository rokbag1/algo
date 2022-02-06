import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    message: 'labas'
  },
  mutations: {
    changeMessage (state) {
      state.message = 'ate';
    },
  },
  getters: {
    message(state) {
      return state.message;
    },
  },
});
