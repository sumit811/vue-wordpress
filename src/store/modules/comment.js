// import axios from "axios";

import axios from "axios"

export default{
    name:'moduleComment',
    namespaced: true,
    state:{
        comments:[],
    },
    getters:{},
    mutation:{
        SET_POST_COMMENTS(state,payload){
            state.comments = payload
        }
    },
    actions:{
        fetchPostSpecificComments({commit},postId){
            axios.get(`wp/v2/comments?post=${postId}`)
            .then(response => {
                commit("SET_POST_COMMENTS",response.data)
            });
        },
    }
}
