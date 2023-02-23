import Vue from "vue";
import Vuex from "vuex";
import axiosInstance from '@/services/api'
import modulePost from "./modules/post"
import moduleAuthentication from "./modules/authentication"
import moduleComment from "./modules/comment"
import moduleNavBar from "./modules/navbar"
import moduleContactus from "./modules/contactus"

// axios.defaults.baseURL = 'http://localhost/wordpress/index.php/wp-json';
// axios.defaults.baseURL = 'http://localhost:8080/wordpress/index.php/wp-json';


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
      axiosInstance.get('https://api.ipify.org/?format=json').then(response =>{
        commit('SET_IP',response.data.ip);
      })
    },
    fetchPage(context,pageId){
      context.commit("SET_SHOW_LOADING", true, { root: true });
      axiosInstance.get(`/wp/v2/pages/${pageId}`)
      .then(response => {
        context.commit('SET_PAGE',response.data)
        context.commit("SET_SHOW_LOADING", false, { root: true });
      }).catch(error => {
        context.commit("SET_SHOW_LOADING", false, { root: true });
        console.log(error);
      })
    },
    fetchAuthorAndPost(context, userArr) {
      context.commit("SET_SHOW_LOADING", true, { root: true }); 
      axiosInstance.all([axiosInstance.get('/wp/v2/users/' + userArr[0]), axiosInstance.get('/wp/v2/posts?author=' + userArr[0]+'&page='+userArr[1])])
        .then(response => {
          context.commit("SET_AUTHOR_POST", response)
          context.commit("SET_SHOW_LOADING", false, { root: true }); 
          context.commit('a/SET_PAGGINATION', response[1].headers)
        }).catch(error => {
          context.commit("SET_SHOW_LOADING", false, { root: true });
          console.log(error)
        });

    },
    fetchAuthorBio(context, author_id){
      axiosInstance.get('/wp/v2/users/' + author_id)
      .then(response =>{
        context.commit("SET_AUTHOR",response.data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    fetchAuthors(context) {
      context.commit("SET_SHOW_LOADING", true, { root: true });
      axiosInstance.get('/wp/v2/users?per_page=50')
        .then(response => {
          context.commit("SET_AUTHORS", response.data)
          context.commit("SET_SHOW_LOADING", false, { root: true });
        }).catch(error => {
          console.log(error);
          context.commit("SET_SHOW_LOADING", false, { root: true });
        })
    },
    fetchTags({ commit }) {
      axiosInstance.get('/wp/v2/tags').then(response => {
        commit('SET_TAGS', response.data)
      });
    },
    async fetchCategories({ commit }) {
      axiosInstance.get('wp/v2/categories')
        .then(response => {
          commit('SET_CATEGORIES', response.data);
        });
    },
    async fetchMenus() {
      axiosInstance.get('/wp/v2/menu-items')
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
