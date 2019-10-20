import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Setting from "../views/Setting.vue";
import Reception from "../views/Reception.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "about",
    name: "about",
    component: About
  },
  {
    path: "/setting",
    name: "setting",
    component: Setting
  },
  {
    path: "/reception",
    name: "reception",
    component: Reception
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
