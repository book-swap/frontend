import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: "bookswap"
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: undefined,
    user: {}
  },
  mutations: {
    auth: (state, payload) => {
      state.token = payload.token;
      state.user = payload.user;
    }
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        Vue.axios({
          url: "local/login",
          data: user,
          method: "POST"
        })
          .then(resp => {
            const token = resp.data.data.jwt;
            const user = {
              email: resp.data.data.email,
              id: resp.data.data.id
            };

            Vue.axios.defaults.headers.common["Authorization"] =
              "Bearer " + token;

            commit("auth", { token, user });
            resolve(resp);
          })
          .catch(err => {
            reject(err.response);
          });
      });
    }
  },
  plugins: [vuexLocal.plugin]
});
