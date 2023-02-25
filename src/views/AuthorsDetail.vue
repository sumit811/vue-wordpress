<template>
    <fragment>
        <Author :key="author.id" :author-img="author.avatar_urls" :author-name="author.name" :author-id="author.id"
            :author-slug="author.slug">
            {{ author.description }}
        </Author>
        <PostExcerpt :post="post" v-for="post in authorPost" :key="post.id" />
        <Paggination :noOfPages="postPagesCount" v-if="postPagesCount" />
    </fragment>
</template>
<script>
import Author from "@/components/AuthorBio.vue"
import PostExcerpt from "@/components/PostExcerpt.vue"
import Paggination from "@/components/Paggination.vue";
import { mapState, mapGetters } from 'vuex';
export default {
    components: { Author, PostExcerpt, Paggination },
    methods: {
        fetchAuthorPost: function (page = 1) {
            let u = this.$route.params.user.split('-');
            this.$store.dispatch("fetchAuthorAndPost", [u[u.length - 1], page]);
        },
    },
    created() {
        this.fetchAuthorPost();
    },
    computed: {
        ...mapState(['author', 'authorPost']),
        ...mapGetters('a', ['postPagesCount']),
    },
    watch: {
        $route(to, from) {
            if (to.query != from.query) {
                this.fetchAuthorPost(to.query.page);
            }
        }
    }
}
</script>