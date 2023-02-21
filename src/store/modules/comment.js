import axios from "axios"

export default {
    name: 'moduleComment',
    namespaced: true,
    state: {
        comments: [],
        post_comment_msg: '',
        recent_comments:[],
    },
    getters: {
        recent_comments_id: state =>{
            let arr = []
            state.recent_comments.forEach(e => {
                arr.push(e.post);
            });
            return arr;
        }
    },
    mutations: {
        SET_RECENT_COMMENTS(state,payload){
            state.recent_comments = payload
        },
        ADD_NEW_COMMENT(state,payload){
            state.comments.unshift(...payload)
        },
        SET_POST_COMMENTS(state, payload) {
            state.comments = payload
        },
        SET_POST_COMMENT_MSG(state, payload){
            state.post_comment_msg = payload
        }
    },
    actions: {
        async deleteComment(context,id){
            let token = context.rootGetters['b/login/getToken']
            await axios.delete(`/wp/v2/comments/${id}?token=${token}`)
            .then(response =>{
                console.log('deleteComment',response);
            })
            .catch(error => {
                console.log('deleteComment',error);
            })
        },
        async recent_comments({commit}){
            await axios.get('wp/v2/comments?order=asc&per_page=5').
            then(response => {
                commit('SET_RECENT_COMMENTS',response.data)
                return response.data;
            }).catch(error => {
                console.error(error);
            })
        },
        async postComment(context, comment) {
            let user = context.rootGetters['b/login/getUserDetail'];
            let token = context.rootGetters['b/login/getToken']
            let post = context.rootState.a.singlePost;
            let headerdata = {
                Authorization : `Bearer ${token}`
               }
            let commentData = {
                author: 4,
                author_email: user.user_email,
                author_name: user.user_display_name,
                author_user_agent: window.navigator.userAgent,
                content: comment,
                date: context.rootGetters['curDate'],
                parent: 0,
                post: post['id'],
                token: token,
            }
            ///wp/v2/comments
            await axios.post(`wp/v2/comments`, commentData, {
                headers: headerdata
            }).then(response => {
                console.log('commentpost', response);
                // context.commit("SET_POST_COMMENTS",[response.data])
                context.commit("ADD_NEW_COMMENT",[response.data])
                context.commit('SET_POST_COMMENT_MSG','Your comment is successfully added.')

            }).catch(error => {
                console.log(error)
                context.commit('SET_POST_COMMENT_MSG',error.response.data.message)

            })
        },
        fetchPostSpecificComments({ commit }, postId) {
            axios.get(`wp/v2/comments?post=${postId}`)
                .then(response => {
                    commit("SET_POST_COMMENTS", response.data)
                });
        },
    }
}
