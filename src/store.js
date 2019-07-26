import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import axios from "axios";

// API URL
axios.defaults.baseURL = process.env.API_URL || "http://localhost/";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: "bookswap"
});

Vue.use(Vuex);

const store = new Vuex.Store({
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
        axios({
          url: "auth/local/login",
          data: user,
          method: "POST"
        })
          .then(resp => {
            const token = resp.data.data.jwt;
            let user = resp.data.data;
            delete user.jwt;

            axios.defaults.headers.common["Authorization"] = "Bearer " + token;

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
        axios({
          url: "auth/local/register",
          data: user,
          method: "POST"
        })
          .then(resp => {
            const token = resp.data.data.jwt;
            const user = resp.data.data;
            delete user.jwt;

            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            commit("auth", { token, user });
            resolve(resp);
          })
          .catch(err => {
            reject(err.response);
          });
      });
    },
    updateUser({ commit, state }, user) {
      return new Promise((resolve, reject) => {
        axios({
          url: "user/me",
          data: user,
          method: "PATCH"
        })
          .then(resp => {
            const token = state.token;
            const user = resp.data;
            delete user.jwt;

            commit("auth", { token, user });
            resolve(resp);
          })
          .catch(err => {
            console.log(err.request);
            reject(err.response);
          });
      });
    },
    logout({ commit }) {
      commit("reset_state");
      localStorage.removeItem("bookswap");
      axios.defaults.headers.common["Authorization"] = undefined;
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
export default store;

// Set JWT token header if token is set inside the state
if (store.state.token !== undefined)
  axios.defaults.headers.common["Authorization"] =
    "Bearer " + store.state.token;
