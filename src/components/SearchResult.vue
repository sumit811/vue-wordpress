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
        let u = new URL(location.href);
        this.$store.dispatch("a/search",u.searchParams.get("q"));
    },
    computed: {
        ...mapState('a', ['searchPost']),
    }
}
</script>