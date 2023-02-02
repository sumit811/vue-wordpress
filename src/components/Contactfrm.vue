<template>
    <form @submit.prevent="contactSubmitted">
        <h1 class="h3 mb-3 fw-normal">Contact Us</h1>
        <div class="alert alert-danger" role="alert" v-if="error" v-html="errormsg"></div>
        <div class="alert alert-success" role="alert" v-if="success">Success</div>
        <div class="mb-3">
            <label for="name" class="form-label">Your name</label>
            <p class="invalid-feedback" :class="{ 'd-none': !error, 'd-block': !this.$v.name.required && error }">
                **Please enter your name.</p>
            <input type="text" class="form-control" id="name" v-model.trim="name">
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <p class="invalid-feedback" :class="{ 'd-none': !error, 'd-block': !this.$v.email.required && error }">
                **Please enter your email.</p>
            <p class="invalid-feedback" :class="{ 'd-none': !error, 'd-block': !this.$v.email.email && error }">
                **Please enter valid email address.</p>    
            <input type="text" class="form-control" id="email" v-model.trim="email">
        </div>
        <div class="mb-3">
            <label for="msg" class="form-label">Message</label>
            <p class="invalid-feedback" :class="{ 'd-none': !error, 'd-block': !this.$v.message.required && error }">
                **Please enter your message.</p>
            <p class="invalid-feedback" :class="{ 'd-none': !error, 'd-block': this.$v.message.required && !this.$v.message.minLength && error }">
                **Message must have at least {{$v.message.$params.minLength.min}} letters.</p>
            <textarea class="form-control" id="msg" rows="5" v-model="message"></textarea>
        </div>
        <div class="text-center">
            <button class="btn btn-lg btn-primary" type="submit">Send</button>
        </div>
    </form>
</template>
<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
    name: 'Contact-frm',
    data() {
        return {
            name: '',
            email: '',
            message: '',
            error: false,
            errormsg: 'Please fill all fields.',
            success:false
        }
    },
    validations: {
        name: {
            required,
        },
        email: {
            required,email
        },
        message: {
            required,
            minLength: minLength(20)
        }
    },
    methods: {
        contactSubmitted: function () {
            this.$v.$touch();
            if (this.$v.$invalid) {
                this.error = true;
            } else {
                this.error = false;
                // let payload = {
                //     title:this.name,
                //     excerpt:this.email,
                //     content:this.message
                // }
                // this.$store.dispatch('contactus/contactus_add',payload)
                this.success = true;
                this.name = '',this.email ='', this.message = ''
            }
        }
    }
}
</script>