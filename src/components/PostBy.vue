<template>
    <fragment>
        <h2 v-if="this.postbyDetail">{{ postbyDetail }}</h2>
        <PostExcerpt :post="post" v-for="post in postBy" :key="post.id" />
        <Paggination :noOfPages="postPagesCount" v-if="postPagesCount" />
    </fragment>
</template>
<script>
import PostExcerpt from "./PostExcerpt.vue"
import Paggination from './Paggination.vue';
import { mapState, mapGetters } from 'vuex';

export default {
    name: 'PostBy',
    data() {
        return {
            category: null,
        }
    },
    components: {
        PostExcerpt, Paggination
    },
    computed: {
        ...mapState('a', ['postBy']),
        ...mapGetters('a', ['postPagesCount']),
        postbyDetail: function () {
            return this.$route.name + ':' + this.tagIdtoName(this.$route.name, this.$route.params.id)
        },
    },
    watch: {
        $route(to, from) {
            if (to !== from) {
                this.fetchPostby();
            }
        },
    },
    methods: {
        tagIdtoName(type, id) {
            let res = ''
            if (type == 'tags') {
                res = this.$store.state.tags.filter(t => {
                    if (id == t.id)
                        return true;
                });
            } else if (type == 'category') {
                res = this.$store.state.categories.filter(t => {
                    if (id == t.id)
                        return true;
                });
            }
            if (Array.isArray(res) && res.length > 0) {
                return res[0].name;
            }

        },
        fetchPostby: function () {
            let q = this.$route.path.split('/');
            this.$store.dispatch("a/fetchPostBy", [q[1], q[2], this.$route.query.page]);
        },
    },
    created() {
        this.fetchPostby();
    },
}
</script>
<style scoped>
h2 {
    margin: 10px 0 20px 0;
    border-bottom: 1px solid;
    padding-bottom: 15px;
    text-transform: capitalize;
}
</style>