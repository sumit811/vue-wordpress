import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import modulePost from "./modules/post"
import moduleAuthentication from "./modules/authentication"

axios.defaults.baseURL = 'http://localhost/wordpress/wp-json';


Vue.use(Vuex);  

const store = new Vuex.Store({
  state: {
    showLoading: false,
    categories:[],
    tags:[],
    menu:''
  },
  getters: {},
  mutations: {
    SET_SHOW_LOADING(state,payload){
      state.showLoading = payload
    },
    SET_CATEGORIES(state,payload){
      state.categories = payload
    },
    SET_TAGS(state,payload){
      state.tags = payload
    }
  },
  actions: {
    fetchTags({commit}){
      axios.get('/wp/v2/tags').then(response => {
        commit('SET_TAGS',response.data)
      });
    },
    async fetchCategories({commit}){
      axios.get('wp/v2/categories')
      .then(response => {
        console.log('wp/v2/categories', response);
        commit('SET_CATEGORIES',response.data);
      });
    },
    async fetchMenus(){
      axios.get('/wp/v2/menu-items')
      .then(response => {
        console.log(response);
      })
    },
   
  },
  modules: {
    a:modulePost,
    b:moduleAuthentication,
  },
});

export default store
