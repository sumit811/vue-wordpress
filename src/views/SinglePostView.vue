<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <SinglePost :singlePost="singlePost" v-if="singlePost"/>
                <AuthorBio :key="author.id" :author-img="author.avatar_urls" :author-name="author.name" :author-id="author.id" :author-slug="author.slug">
                        {{author.description}}
                </AuthorBio>
                <Comments :comments="comments"/>
                <CommentFrm />
            </div>
            <div class="col-md-4">
                <SideBar />
            </div>
        </div>
    </div>

</template>    
<script>
import { mapState } from 'vuex';
import SideBar from "@/components/SideBar.vue";
import AuthorBio from "@/components/AuthorBio.vue"
import Comments from "@/components/ShowComments.vue"
import CommentFrm from "@/components/CommentFrm.vue"
import SinglePost from '@/components/SinglePost.vue';

export default {
    name: 'SinglePostView',
    components: {
        SideBar, AuthorBio, Comments, CommentFrm, SinglePost
    },
    computed: {
        ...mapState('a', ['singlePost']),
        ...mapState(['author']),
        ...mapState('c', ['comments'])
    },
    created() {
        this.$store.dispatch("a/fetchSinglePost", this.$route.params.pathMatch.substring(1))
        .then(()=>{
            // console.log('this.singlePost.author',this.singlePost.author);
            // console.log('this.singlePost.id',this.singlePost.id);
            this.$store.dispatch("fetchAuthorBio",this.singlePost.author);
            this.$store.dispatch("c/fetchPostSpecificComments",this.singlePost.id);
        });
        

    }
}
</script>
