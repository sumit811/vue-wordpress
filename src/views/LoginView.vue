<template>
    <div class="row justify-content-md-center container mt-5 mb-5">
        <div class="col-md-6">
            <h1 class="mb-3">Login</h1>
            <transition enter-active-class="animate__animated animate__backInDown" leave-active-class="animate__animated animate__fadeOut">
                <div class="alert alert-danger" role="alert" v-if="error" v-html="errormsg"></div>
            </transition>
            <form @submit.prevent="login" class="row g-3 needs-validation" ref="loginfrm">
                <div class="mb-3 ">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" class="form-control" id="username" v-model.trim="username"
                        :class="{ 'is-invalid': !this.$v.username.required && error }">
                    <p class="invalid-feedback"
                        :class="{ 'd-none': !error, 'd-block': !this.$v.username.required && error }">**Please enter your
                        username.</p>

                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" v-model.trim="password"
                        :class="{ 'is-invalid': !this.$v.password.required && error }">
                    <p class="invalid-feedback"
                        :class="{ 'd-none': !error, 'd-block': !this.$v.password.required && error }">**Please enter
                        your password.</p>

                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>
<script>
import { required } from 'vuelidate/lib/validators'
import { mapActions, mapMutations } from 'vuex';

export default {
    name: 'LoginView',
    data() {
        return {
            username: '',
            password: '',
            message: '',
            error: false,
            errormsg: 'Please fill all fields.'
        }
    },
    watch: {
        // error: function(o,n){
        //     console.log('o-',o,'/n-',n);
        //     if(!n){
        //         console.log('n',n);
        //         this.$refs.loginfrm.classList.add('was-validated');
        //     } else {
        //         this.$refs.loginfrm.classList.remove('was-validated');
        //     }
        // }
    },
    validations: {
        username: {
            required,
        },
        password: {
            required
        }
    },
    // beforeRouteEnter(){},
    // beforeRouteLeave(){},
    methods: {
        ...mapActions(['b/login/fetchLogin']),
        ...mapMutations(['SET_SHOW_LOADING']),
        async login() {
            this.$v.$touch();
            // console.log('this.$v',this.$v);
            if (this.$v.$invalid) {
                this.error = true;
                // console.error('error');
            } else {
                // console.info('success');
                this.SET_SHOW_LOADING(true);
                this.error = false;
                this['b/login/fetchLogin']({ 'username': this.username, 'password': this.password })
                    .then(() => {
                        this.SET_SHOW_LOADING(false);
                        this.$router.replace('/profile');
                    })
                    .catch(err => {
                        // console.info(err)
                        this.SET_SHOW_LOADING(false);

                        this.error = true;
                        this.errormsg = err.response.data.message;
                    });
                //    this.$store.dispatch("b/login/fetchLogin",{'username':this.username,'password':this.password});
                // console.log('ek jeep khari m');
            }
        }
    },
}
</script>