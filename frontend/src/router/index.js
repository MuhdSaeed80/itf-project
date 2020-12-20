import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import router from "../routes.js";

Vue.use(VueRouter);
const routes = {
  "/": Home,
  "/about": About
}
// const routes = [
//   {
//     path: "/",
//     name: "Home",
//     component: Home
//   },
//   {
//     path: "/about",
//     name: "About",
//     component: About
//   }
// ];

export default router;
