import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import modulePost from "./modules/post"
import moduleAuthentication from "./modules/authentication"

axios.defaults.baseURL = 'http://localhost/wordpress/wp-json';


Vue.use(Vuex);  

// const modulePost = {
//   namespaced: true,
//   state:{},
//   getters:{},
//   mutations:{},
//   actions:{},
// };


// const moduleLogin = {
//   namespaced: true,
//   state:{},
//   getters:{},
//   mutations:{},
//   actions:{},
// };
// const moduleSignUP = {
//   namespaced: true,
//   state:{},
//   getters:{},
//   mutations:{},
//   actions:{},
// };
// const moduleAuthentication = {
//   namespaced: true,
//   modules:{
//     login:moduleLogin,
//     signup:moduleSignUP,
//   }
// }
export default new Vuex.Store({
  state: {
    showLoading: false
  },
  getters: {},
  mutations: {
    SET_SHOW_LOADING(state,payload){
      state.showLoading = payload
    }
  },
  actions: {},
  modules: {
    a:modulePost,
    b:moduleAuthentication,
  },
});
