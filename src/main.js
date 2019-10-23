import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "ionicons/css/ionicons.min.css";
import "normalize.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./css/bracket.css";
import "./js/bracket";

import "./scss/main.scss";
import "./css/main.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
