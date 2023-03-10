import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from 'vuelidate'
import Fragment from 'vue-fragment'

import "./filters/filter1.js"

Vue.use(Vuelidate)
Vue.config.productionTip = false;
Vue.use(require('vue-moment'));
Vue.use(Fragment.Plugin)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
