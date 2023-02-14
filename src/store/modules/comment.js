import axios from "axios"

export default {
    name: 'moduleComment',
    namespaced: true,
    state: {
        comments: [],
        post_comment_msg: '',
        recent_comments:[],
    },
    getters: {},
    mutations: {
        SET_RECENT_COMMENTS(state,payload){
            state.recent_comments = payload
        },
        SET_POST_COMMENTS(state, payload) {
            state.comments.unshift(...payload)
        },
        SET_POST_COMMENT_MSG(state, payload){
            state.post_comment_msg = payload
        }
        // UPDATE_POST_COMMENTS(state,payload){}
    },
    actions: {
        async recent_comments({commit}){
            axios.get('wp/v2/comments?order=asc').
            then(response => {
                console.log('recent_comments',response);
                commit('SET_RECENT_COMMENTS',response)
            }).catch(error => {
                console.error(error);
            })
        },
        async postComment(context, comment) {
            //getUserDetail,getToken
            // console.log(context)
            let user = context.rootGetters['b/login/getUserDetail'];
            let token = context.rootGetters['b/login/getToken']
            let post = context.rootState.a.singlePost;
            // console.log('postComment-getUserDetail',user,post);
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
                toekn: token,
            }
            ///wp/v2/comments
            console.log('postComment:-', context, comment, commentData);
            await axios.post(`wp/v2/comments`, commentData, {
                headers: headerdata
            }).then(response => {
                console.log('commentpost', response);
                context.commit("SET_POST_COMMENTS",[response.data])
                context.commit('SET_POST_COMMENT_MSG','Your comment is successfully added.')

            }).catch(error => {
                console.log(error)
                context.commit('SET_POST_COMMENT_MSG',error.response.data.message)

            })
        },
        fetchPostSpecificComments({ commit }, postId) {
            axios.get(`wp/v2/comments?post=${postId}`)
                .then(response => {
                    // console.info('fetchPostSpecificComments:-', response);
                    commit("SET_POST_COMMENTS", response.data)
                });
        },
    }
}
