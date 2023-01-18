<template>
    <div class="container">
        <PostExcerptSearch v-for="post in searchPost" :key="post.id" :post="post" />
    </div>
</template>
<script>
import PostExcerptSearch from './PostExcerpt-search.vue';
import { mapState } from 'vuex';

export default {
    components: {
        PostExcerptSearch
    },
    created(){
        let q = location.search.split("=");
        this.$store.dispatch("a/search",q[1]);
    },
    computed: {
        ...mapState('a', ['searchPost']),
    }
}
</script>