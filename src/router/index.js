import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import SinglePostView from "../views/SinglePostView.vue";
import PageNotFound from "../views/PageNotFound.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/page/:id",
    component: HomeView,
  },
  {
    path: "/contactus",
    name: "contactus",
    meta:{sidebar:false},
    component: () => import(/* webpackChunkName: "contactus" */ "../views/ContactView.vue"),
  },
  {
    path: "/authors",
    name: "authors",
    component: () => import("../views/AuthorsView.vue"),
  },
  {
    path: "/authors/:user",
    name: "authorsDetails",
    component: () => import("../views/AuthorsDetail.vue"),
  },
  {
    path: '/tag/:id',
    name: "tags",
    component: () => import("../components/PostBy.vue"),
  },
  {
    path: '/category/:id',
    name: "category",
    component: () => import("../components/PostBy.vue"),
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
    meta: {auth: false,sidebar:false },
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "profileview" */ "../views/ProfileView.vue"),
    meta: { auth: true }
  },
  {
    path: "*",
    component: SinglePostView,
  },
  {
    path: "/aboutus",
    name: "aboutus",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/404",
    component: PageNotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

store.dispatch("b/login/autoLogin").then(() => {
  // console.log('response',response);
  router.beforeEach((to, from, next) => {
    // console.error(store)
    let isUserLoggedin = store.getters["b/login/isUserLoggedin"];
    // console.log('to.meta.auth', to.meta.auth);
    // console.info("isUserLoggedin", isUserLoggedin);
    // console.warn("('auth' in to.meta)", ('auth' in to.meta));
    if (('auth' in to.meta) && to.meta.auth && !isUserLoggedin) {
      // console.log(111);
      next('/login');
    } else if (('auth' in to.meta) && !to.meta.auth && isUserLoggedin) {
      next('/profile');
      // console.log(222);
    } else {
      next();
      // console.log(333);
    }
    // if(('auth' in to.meta)  && to.meta.auth && !this.$store.getters['b/login/isUserLoggedin']){
    //   next('/login');

    // } else if(('auth' in to.meta) && !to.meta.auth && this.$store.getters['b/login/isUserLoggedin']){
    //   next('/profile');
    // } else {
    //next()
    // }
  });
})
export default router;  
