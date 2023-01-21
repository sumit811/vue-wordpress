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
    categories: [],
    tags: [],
    menu: '',
    authors: [],
    author: {
      avatar_urls:{},
      name:'',
      id:0,
      slug:''
    },
    authorPost: [],
  },
  getters: {},
  mutations: {
    SET_AUTHOR_POST(state, payload) {
      state.author = payload[0].data
      state.authorPost = payload[1].data
    },
    SET_AUTHOR(state, payload) {
      state.author = payload
    },
    SET_AUTHORS(state, payload) {
      state.authors = payload
    },
    SET_SHOW_LOADING(state, payload) {
      state.showLoading = payload
    },
    SET_CATEGORIES(state, payload) {
      state.categories = payload
    },
    SET_TAGS(state, payload) {
      state.tags = payload
    }
  },
  actions: {
     fetchAuthorAndPost(context, user_id) {
      context.commit("SET_SHOW_LOADING", true, { root: true }); 
       axios.all([axios.get('/wp/v2/users/' + user_id), axios.get('/wp/v2/posts?author=' + user_id)])
        .then(response => {
          console.log('axios all', response);
          context.commit("SET_AUTHOR_POST", response)
          context.commit("SET_SHOW_LOADING", false, { root: true }); 
          // return 'HomeLander';
        }).catch(error => {
          context.commit("SET_SHOW_LOADING", false, { root: true });
          console.log(error)
        });

    },
    fetchAuthors(context) {
      context.commit("SET_SHOW_LOADING", true, { root: true });
      axios.get('/wp/v2/users?per_page=50')
        .then(response => {
          context.commit("SET_AUTHORS", response.data)
          context.commit("SET_SHOW_LOADING", false, { root: true });
        }).catch(error => {
          console.log(error);
          context.commit("SET_SHOW_LOADING", false, { root: true });
        })
    },
    fetchTags({ commit }) {
      axios.get('/wp/v2/tags').then(response => {
        commit('SET_TAGS', response.data)
      });
    },
    async fetchCategories({ commit }) {
      axios.get('wp/v2/categories')
        .then(response => {
          console.log('wp/v2/categories', response);
          commit('SET_CATEGORIES', response.data);
        });
    },
    async fetchMenus() {
      axios.get('/wp/v2/menu-items')
        .then(response => {
          console.log(response);
        })
    },

  },
  modules: {
    a: modulePost,
    b: moduleAuthentication,
  },
});

export default store
