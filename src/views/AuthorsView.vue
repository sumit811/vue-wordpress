<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <h1>Our Authors</h1>
                <section>
                    <Author v-for="author in authors" :key="author.id" :author-img="author.avatar_urls" :author-name="author.name" :author-id="author.id" :author-slug="author.slug">
                        {{author.description}}
                    </Author>
                </section>
            </div>
            <div class="col-md-4">
                <SideBar />
            </div>
        </div>
    </div>

</template>    
<script>
import SideBar from "@/components/SideBar.vue";
import Author from "@/components/AuthorBio.vue"
import { mapState } from "vuex";
export default {
    name: 'AuthorsView',
    components: {
        SideBar, Author
    },
    computed:{
        ...mapState(['authors'])
    },
    created(){
        this.$store.dispatch('fetchAuthors');
    }
}
</script>
