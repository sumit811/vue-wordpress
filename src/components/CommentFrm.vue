<template>
    <div class="mt-5" v-if="isLoggedIn">
        <h3>Leave a comment</h3>
        <p>Logged in as admin. Edit your profile. Log out? Required fields are marked *</p>
        <div class="alert alert-danger" role="alert" v-if="commentMsg">
            {{ commentMsg }}
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Comment *</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="comment"></textarea>
        </div>
        <button type="submit" class="btn btn-primary" @click="commentAdd">Post Comment</button>
    </div>
    <h3 class="mt-5 text-center" v-else>Please login to enter your comment.<br />
    </h3>
</template>
<script>
export default {
    data() {
        return {
            comment: '',
            msg: ''
        }
    },
    methods: {
        commentAdd: function () {
            this.$store.dispatch("c/postComment", this.comment).then((response) => {
                console.log('comment msg', response);
                if (response.msg) {
                    this.msg = response.msg
                } else {
                    this.msg = 'Your comment is added'
                }
                this.comment = ''
            }).catch(error => {
                this.comment = ''
                this.msg = error.msg;
            })
        },
    },
    computed: {
        isLoggedIn() {
            return this.$store.getters['b/login/isUserLoggedin']
        },
        commentMsg: function () {
            return this.$store.state.c.post_comment_msg
        }
    }
}
</script>