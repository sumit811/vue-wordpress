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

export default {
    name: 'SinglePostView',
    components: {
        SideBar
    },
    method: {
        getPost: function () {

        },
    },
    computed: {
        ...mapState('a', ['singlePost'])
    },
    created() {
        console.log('this.$route.params', this.$route.params);
        console.warn('this.$route.params.pathMatch.substring(1)',this.$route.params.pathMatch.substring(1));
        this.$store.dispatch("a/fetchSinglePost", this.$route.params.pathMatch.substring(1));

    }
}
</script>
<style scoped>
section>>>img {
    max-width: 100%;
}
</style>