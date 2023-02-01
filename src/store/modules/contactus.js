import axios from "axios"
export default{
    name:'contactus',
    namespaced: true,
    actions:{
        contactus_add(_,payload){
            axios.post('wp/v2/posts',payload).then(response => {
                return 'contactfrm' + response;
            }).catch(error => {
                console.warn(error)
            }).finally(()=> {
                console.log('Finally');
            })
        }
    }
}