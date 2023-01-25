import axios from "axios"

export default{
    name:'moduleComment',
    namespaced: true,
    state:{
        comments:[],
    },
    getters:{},
    mutations:{
        SET_POST_COMMENTS(state,payload){
            state.comments = payload
        }
    },
    actions:{
        postComment(context,comment){
            let commentData = {
                author:'author',
                author_email:'author_email',
                author_ip:'author_ip',
                author_name:'author_name',
                author_url:'author_url',
                author_user_agent:'author_user_agent',
                content:'content',
                date:'date',
                date_gmt:'date_gmt',
                parent:'parent',
                post:'post',
                status:'author_url',
                meta:'meta'
            }
            ///wp/v2/comments
            console.log('postComment:-',context,comment,commentData);
        },
        fetchPostSpecificComments({commit},postId){
            axios.get(`wp/v2/comments?post=${postId}`)
            .then(response => {
                console.info('fetchPostSpecificComments:-',response);
                commit("SET_POST_COMMENTS",response.data)
            });
        },
    }
}
