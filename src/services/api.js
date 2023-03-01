import axios from 'axios'
import store from '@/store';

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = 'http://localhost:3000/wordpress/index.php/wp-json';

if (process.env.NODE_ENV === 'development') {
    axiosInstance.defaults.baseURL = 'http://localhost:8080/wordpress/index.php/wp-json';
}

axiosInstance.interceptors.request.use(config => {
    let token = store.getters['b/login/getToken'];
    if(token){
        config.headers.Authorization =  `Bearer ${token}`;
    }
    return config;
});
export default axiosInstance;