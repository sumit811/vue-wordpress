<template>
    <div class="mt-5">
        <h3>Leave a comment</h3>
        <p>Logged in as admin. Edit your profile. Log out? Required fields are marked *</p>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Comment *</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="comment"></textarea>
        </div>
        <button type="submit" class="btn btn-primary" @click="commentAdd">Post Comment</button>
        {{comment}}
    </div>
</template>
<script>
export default {
    data(){
        return{
            comment:'',
        }
    },
    methods:{
        commentAdd: function(){
            this.$store.dispatch("c/postComment",this.comment)
        },
    }
}
</script>