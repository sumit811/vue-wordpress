<template>
    <fragment>
        <SinglePost :singlePost="singlePost" v-if="singlePost" />
        <AuthorBio :key="author.id" :author-img="author.avatar_urls" :author-name="author.name" :author-id="author.id"
            :author-slug="author.slug">
            {{ author.description }}
        </AuthorBio>
        <Comments :comments="comments" />
        <CommentFrm />
    </fragment>
</template>    
<script>
import { mapState } from 'vuex';
import AuthorBio from "@/components/AuthorBio.vue"
import Comments from "@/components/ShowComments.vue"
import CommentFrm from "@/components/CommentFrm.vue"
import SinglePost from '@/components/SinglePost.vue';

export default {
    name: 'SinglePostView',
    components: {
        AuthorBio, Comments, CommentFrm, SinglePost
    },
    computed: {
        ...mapState('a', ['singlePost']),
        ...mapState(['author']),
        ...mapState('c', ['comments'])
    },
    created() {
        this.$store.dispatch("a/fetchSinglePost", this.$route.params.pathMatch.substring(1))
            .then(() => {
                if (!this.$store.state.a.singlePost) {
                    this.$router.push('/404');
                } else {
                    this.$store.dispatch("fetchAuthorBio", this.singlePost.author);
                    this.$store.dispatch("c/fetchPostSpecificComments", this.singlePost.id);
                }
            });


    },
    watch: {
        $route(to, from) {
            if (to !== from) {
                this.$forceUpdate();
            }
        },
    }
}
</script>
