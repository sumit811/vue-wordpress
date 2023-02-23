import axiosInstance from '@/services/api'

export default{
    name:'moduleNavBar',
    state:{
        menu:{}
    },
    mutations:{
        SET_MENU(state, payload){
            state.menu = payload
        }
    },
    getters:{},
    actions:{
        fetchMenu({commit}){
            axiosInstance.get("wp-json/wp/v2/menu")
            .then(response =>{
                console.log(response);
                commit("SET_MENU",response.body)
            })
            .catch(error => {
                console.log(error);
            });
        }
    }
}