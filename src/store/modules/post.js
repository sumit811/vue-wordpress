import axios from "axios"

export default {
    name: "modulePost",
    namespaced: true,
    state: {
        posts: [],
        searchPost: [],
        singlePost: [],
        searched:false,
        postPaggination: {
            totalpost: 0,
            totalpages: 0
        },
    },
    mutations: {
        SET_SEARCHED_TRIGGER(state,payload){
            state.searched = payload
        },
        SET_SEARCH_POST(state,payload){
            state.searchPost = payload;
        },
        SET_POSTS(state, payload) {
            // state.posts.push(...payload)
            state.posts = payload
        },
        SET_SINGLE_POST(state, payload) {
            state.singlePost = payload.data[0]
        },
        SET_PAGGINATION(state, payload) {
            state.postPaggination.totalpost = Math.ceil(payload['x-wp-total']);
            state.postPaggination.totalpages = Number(payload['x-wp-totalpages']);
            console.log('postPaggination', state.postPaggination.totalpages);
        }
    },
    getters: {
        postTotal(state) {
            return state.postPaggination.totalpost;
        },
        postPagesCount(state) {
            console.warn('postPaggination', state.postPaggination.totalpages);
            return state.postPaggination.totalpages;
        }
    },
    actions: {
        async search({commit},query) {
            commit("SET_SHOW_LOADING", true, { root: true });
            commit("SET_SEARCHED_TRIGGER",true);
            axios.get(`http://localhost/wordpress/wp-json/wp/v2/search?search=${query}`)
                .then(response => {
                    console.log('Search Response',response);
                    commit('SET_SEARCH_POST', response.data);
                    commit('SET_PAGGINATION', response.headers)
                    commit("SET_SHOW_LOADING", false, { root: true });
                }).catch(error => {
                    commit("SET_SHOW_LOADING", false, { root: true });
                    console.log(error);
                });
        },
        async fetchPosts(context, page) {
            // console.log('context:',context);
            context.commit("SET_SHOW_LOADING", true, { root: true });
            context.commit("SET_SEARCHED_TRIGGER",false);
            // let url = '/wp/v2/posts?per_page=10';
            let url = '/wp/v2/posts';
            if (page) {
                url = `/wp/v2/posts?per_page=10&page=${page}`;
            }
            axios.get(url).then(response => {
                context.commit('SET_POSTS', response.data);
                context.commit('SET_PAGGINATION', response.headers)
                // console.log('header: ' , response);
                // console.log('header: ' , response.headers);
            }).then(() => {
                // console.log('header: ' , response.headers);
                // console.log('header: ' , response.headers['x-wp-totalpages']);
                context.commit("SET_SHOW_LOADING", false, { root: true });
            }).catch(error => {
                context.commit("SET_SHOW_LOADING", false, { root: true });
                console.log(error);
            });
        },
        async fetchSinglePost({ commit }, slug) {
            console.log('fetchSinglePost id:-', slug);
            axios.get(`/wp/v2/posts/?slug=${slug}`).then(response => {
                commit('SET_SINGLE_POST', response)
            }).catch(error => {
                console.log('fetchSinglePost', error);
            });
        }
    },
}