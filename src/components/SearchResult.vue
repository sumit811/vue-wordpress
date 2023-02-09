<template>
    <div class="container" v-if="searchPost.length">
        <PostExcerptSearch v-for="post in searchPost" :key="post.id" :post="post" />
    </div>
    <div class="container" v-else>
        <NoPostFound />
    </div>
</template>
<script>
import PostExcerptSearch from './PostExcerpt-search.vue';
import NoPostFound from './NoPostFound.vue';
import { mapState } from 'vuex';

export default {
    components: {
        PostExcerptSearch,NoPostFound
    },
    methods:{
        searchData(){
            let u = new URL(location.href);
            this.$store.dispatch("a/search", u.searchParams.get("q"));
        }
    },
    created() {
        this.searchData();
    },
    computed: {
        ...mapState('a', ['searchPost']),
    },
    watch: {
        $route(to, from){
            if(to != from){
                this.searchData();
            }
        }
    }
}
</script>