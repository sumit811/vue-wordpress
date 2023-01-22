<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <article v-if="singlePost.title">
                    <h1>{{ singlePost.title.rendered }}</h1>
                    <section>
                        <div v-html="singlePost.content.rendered"></div>
                    </section>
                    <hr />
                    <footer>
                        <div class="row">
                            <div class="col">Published January 7, 2023</div>
                            <div class="col">
                                <p>Categorized as Category4</p>
                                <p>Tagged Tag5</p>
                            </div>
                        </div>
                    </footer>
                </article>
                <AuthorBio :key="author.id" :author-img="author.avatar_urls" :author-name="author.name" :author-id="author.id" :author-slug="author.slug">
                        {{author.description}}
                </AuthorBio>
                <Comments :comments="comments"/>
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

export default {
    name: 'SinglePostView',
    components: {
        SideBar, AuthorBio, Comments
    },
    method: {
        getPost: function () {

        },
    },
    computed: {
        ...mapState('a', ['singlePost']),
        ...mapState(['author']),
        ...mapState('c', ['comments'])
    },
    created() {
        console.log('this.$route.params', this.$route.params);
        console.warn('this.$route.params.pathMatch.substring(1)',this.$route.params.pathMatch.substring(1));
        this.$store.dispatch("a/fetchSinglePost", this.$route.params.pathMatch.substring(1))
        .then(()=>{
            console.log('asdfadfdsafa',this.singlePost);
            this.$store.dispatch("fetchAuthorBio",this.singlePost.author);
            this.$store.dispatch("c/fetchPostSpecificComments",this.singlePost.id);
        });
        

    }
}
</script>
<style scoped>
section>>>img {
    max-width: 100%;
}
</style>