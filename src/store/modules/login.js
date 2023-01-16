import axios from "axios"
export default{
    name:'moduleLogin',
    namespaced: true,
    state:{
        token:'',
        user_email:'',
        user_nicename:'',
        user_display_name:'',
    },
    mutations:{
        SET_USER(state,payload){
            state.token = payload.token
            state.user_email = payload.user_email
            state.user_nicename = payload.user_nicename
            state.user_display_name = payload.user_display_name
        },
        LOGOUT_USER(state){
            state.token = '',
            state.user_email = '',
            state.user_nicename = '',
            state.user_display_name = '',
            sessionStorage.removeItem('vue-wordpress');
        }
    },
    getters:{
        getToken: state => state.token,
        isUserLoggedin: state => !!state.token
    },
    actions:{
        autoLogin({commit}){
            let userData = JSON.parse(sessionStorage.getItem('vue-wordpress'));
            if(userData){
                commit('SET_USER',userData);
            }
        },
        async fetchLogin({commit},payload){
            // console.log('payload',payload);
            // try {
            //     axios.post('/jwt-auth/v1/token',{
            //         'username':payload.username,
            //         'password':payload.password
            //     }).then(response =>{
            //         console.log('login response', response);
            //         commit('SET_USER',response.data);
            //     })
            // } catch (error) {
            //     throw error;
            // }
            await axios.post('/jwt-auth/v1/token',{
                'username':payload.username,
                'password':payload.password
            }).then(response =>{
                console.log('login response', response);
                sessionStorage.setItem('vue-wordpress',JSON.stringify(response.data))
                commit('SET_USER',response.data);
            }).catch(error =>{
                // console.log('login error', error);
                throw error;
                // return error;
            });
        },
    },
}