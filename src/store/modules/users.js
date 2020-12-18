import axios from 'axios';

export default {
  state: {
    user: null,
    foo: 'users-foo',
  },
  mutations: {
    updateCurrentUser(state, user) {
      state.user = user;
    },
  },
  getters: {
    /* // This one will conflict with root getter as this module is not namespaced
    foo(state) {
      return `users-getter/${state.foo}`;
    },
    */
  },
  actions: {
    signIn({ commit }) {
      axios.post('/api/sign-in')
        .then((result) => commit('updateCurrentUser', result.data))
        .catch(console.error);
    },
    addRobotToCart() {
      console.log('Users: addRobotToCart dummy stub');
    },
  },
};
