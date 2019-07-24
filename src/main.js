import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import FontLoader from "./components/FontLoader.vue";
import "normalize.css";

Vue.config.productionTip = false;

new Vue({
  mixins: [FontLoader],
  router,
  store,
  render: h => h(App)
}).$mount("#app");
