import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import FontLoader from "./components/FontLoader.vue";
import "normalize.css";
import axios from "axios";
import VueAxios from "vue-axios";
import Notifications from "vue-notification"; // For SSR use: import Notifications from 'vue-notification/dist/ssr.js'

// API URL
axios.defaults.baseURL = process.env.API_URL || "http://localhost:8081/";

Vue.use(VueAxios, axios);
Vue.use(Notifications);

Vue.config.productionTip = false;

new Vue({
  mixins: [FontLoader],
  router,
  store,
  render: h => h(App)
}).$mount("#app");
