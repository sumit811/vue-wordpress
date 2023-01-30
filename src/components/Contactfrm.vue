<template>
    <form @submit.prevent="contactSubmitted">
        <h1 class="h3 mb-3 fw-normal">Contact Us</h1>

        <div class="mb-3">
            <label for="name" class="form-label">Your name</label>
            <input type="email" class="form-control" id="name" v-model.trim="name">
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" v-model.trim="email">
        </div>
        <div class="mb-3">
            <label for="msg" class="form-label">Message</label>
            <textarea class="form-control" id="msg" rows="5" v-model="message"></textarea>
        </div>
        <div class="text-center">
            <button class="btn btn-lg btn-primary" type="submit">Send</button>
        </div>
    </form>
</template>
<script>
export default {
    name: 'Contact-frm',
    data() {
        return {
            name: '',
            email: '',
            message: ''
        }
    },
    methods: {
        contactSubmitted: function () {
            console.log('dfsadfaf');
        }
    }
}
</script>