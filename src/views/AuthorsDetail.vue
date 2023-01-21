<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <Author :key="author.id" :author-img="author.avatar_urls"
                    :author-name="author.name" :author-id="author.id" :author-slug="author.slug">
                    {{ author.description }}
                </Author>
                <PostExcerpt :post="post" v-for="post in authorPost" :key="post.id" />
            </div>
            <div class="col-md-4">
                <SideBar />
            </div>
        </div>
    </div>
</template>
<script>
import Author from "@/components/AuthorBio.vue"
import SideBar from "@/components/SideBar.vue";
import PostExcerpt from "@/components/PostExcerpt.vue"
import { mapState } from "vuex";
export default {
    components: { Author, SideBar, PostExcerpt },
    created() {
        let ur = location.pathname.split('/');
        let u = ur[2].split('-');
        this.$store.dispatch("fetchAuthorAndPost", u[2]).then(response => {
            console.log('fetchAuthorAndPost', response);
        })
    },
    computed:{
        ...mapState(['author','authorPost'])
    }
}
</script>