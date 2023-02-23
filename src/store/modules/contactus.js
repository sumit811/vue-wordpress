import axiosInstance from '@/services/api'
export default{
    name:'contactus',
    namespaced: true,
    actions:{
        contactus_add(_,payload){
            axiosInstance.post('wp/v2/posts',payload).then(response => {
                return 'contactfrm' + response;
            }).catch(error => {
                console.warn(error)
            }).finally(()=> {
                console.log('Finally');
            })
        }
    }
}