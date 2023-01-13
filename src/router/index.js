import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import SinglePostView from "../views/SinglePostView.vue"
// import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { transition: 'fade' },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: { transition: 'fade' },
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
    import(/* webpackChunkName: "profileview" */ "../views/ProfileView.vue"),
  },
  {
    path: "*",
    component: SinglePostView,
    meta: { transition: 'fade' },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach(() => {
//   console.info(store.state.b.login)
// });
export default router;
