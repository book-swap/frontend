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
    },
    reset_state: state => {
      state.token = undefined;
      state.user = undefined;
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
            let user = resp.data.data;
            delete user.jwt;

            Vue.axios.defaults.headers.common["Authorization"] =
              "Bearer " + token;

            commit("auth", { token, user });
            resolve(resp);
          })
          .catch(err => {
            reject(err.response);
          });
      });
    },
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        Vue.axios({
          url: "local/register",
          data: user,
          method: "POST"
        })
          .then(resp => {
            const token = resp.data.data.jwt;
            const user = resp.data.data;
            delete user.jwt;

            Vue.axios.defaults.headers.common["Authorization"] =
              "Bearer " + token;
            commit("auth", { token, user });
            resolve(resp);
          })
          .catch(err => {
            reject(err.response);
          });
      });
    },
    logout({ commit }) {
      commit("reset_state");
      localStorage.removeItem("bookswap");
      Vue.axios.defaults.headers.common["Authorization"] = undefined;
    }
  },
  getters: {
    isLoggedIn: state => {
      return !!(state.token && state.user);
    },
    fullName: state => {
      return `${state.user.firstName} ${state.user.lastName}`;
    }
  },
  plugins: [vuexLocal.plugin]
});
