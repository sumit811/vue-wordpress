import moduleLogin from "./login"
export default {
    name:'moduleAuthentication',
    namespaced: true,
    modules: {
        login: moduleLogin
    }
}