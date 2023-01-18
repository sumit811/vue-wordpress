import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import SinglePostView from "../views/SinglePostView.vue"
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { transition: 'fade' },
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("../components/SearchResult.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: { transition: 'fade', auth: false },
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
    import(/* webpackChunkName: "profileview" */ "../views/ProfileView.vue"),
    meta: {auth: true}
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
    meta: {auth: false}
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // console.log('to.meta.auth',to.meta.auth);
  // console.info("store.getters['b/login/isUserLoggedin']",store.getters['b/login/isUserLoggedin']);
  if(('auth' in to.meta) && to.meta.auth && !store.getters['b/login/isUserLoggedin']){
    next('/login');
  } else if(('auth' in to.meta) && !to.meta.auth && store.getters['b/login/isUserLoggedin']){
    next('/profile');
  } else {
    next();
  }
  // if(('auth' in to.meta)  && to.meta.auth && !this.$store.getters['b/login/isUserLoggedin']){
  //   next('/login');

  // } else if(('auth' in to.meta) && !to.meta.auth && this.$store.getters['b/login/isUserLoggedin']){
  //   next('/profile');
  // } else {
    //next()
 // }
});
export default router;  
