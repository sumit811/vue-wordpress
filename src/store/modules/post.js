import axios from "axios"

export default {
    name: "modulePost",
    namespaced: true,
    state: {
        posts: [],
        singlePost: [],
    },
    getters: {},
    mutations: {
        SET_POSTS(state, payload) {
            state.posts = payload
        },
        SET_SINGLE_POST(state, payload) {
            state.singlePost = payload.data[0]
        }
    },
    actions: {
        async fetchPosts(context) {
            // console.log('context:',context);
            axios.get('/wp/v2/posts').then(response => {
                context.commit('SET_POSTS', response.data);
            })
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