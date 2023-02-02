import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import modulePost from "./modules/post"
import moduleAuthentication from "./modules/authentication"
import moduleComment from "./modules/comment"
import moduleNavBar from "./modules/navbar"
import moduleContactus from "./modules/contactus"

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
    ip:'',
    page:{}
  },
  getters: {
    curDate(){
      let dt = new Date()
      return dt.toISOString().slice(0, 19).replace('T', ' ');
    }
  },
  mutations: {
    SET_PAGE(state, payload){
      state.page = payload
    },
    SET_IP(state, payload){
      state.ip = payload
    },
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
    fetchIP({commit}){
      axios.get('https://api.ipify.org/?format=json').then(response =>{
        // console.log('SET_IP',response.data.ip);
        commit('SET_IP',response.data.ip);
      })
    },
    fetchPage(context,pageId){
      context.commit("SET_SHOW_LOADING", true, { root: true });
      axios.get(`/wp/v2/pages/${pageId}`)
      .then(response => {
        context.commit('SET_PAGE',response.data)
        context.commit("SET_SHOW_LOADING", false, { root: true });
      }).catch(error => {
        context.commit("SET_SHOW_LOADING", false, { root: true });
        console.log(error);
      })
    },
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
    fetchAuthorBio(context, author_id){
      axios.get('/wp/v2/users/' + author_id)
      .then(response =>{
        // console.log('fetchAuthorBio',response);
        context.commit("SET_AUTHOR",response.data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    fetchAuthors(context) {
      context.commit("SET_SHOW_LOADING", true, { root: true });
      axios.get('/wp/v2/users?per_page=50')
        .then(response => {
          console.log('fetchAuthors action');
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
    c: moduleComment,
    navbar:moduleNavBar,
    contactus:moduleContactus
  },
});

export default store
