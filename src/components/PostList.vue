<template>
  <div>
    <PostExcerpt :post="post" v-for="post in posts" :key="post.id" />
    <Paggination :noOfPages="postPagesCount" v-if="postPagesCount" />
  </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex';
import PostExcerpt from "./PostExcerpt.vue"
import Paggination from './Paggination.vue';

export default {
  name: "PostList",
  data() {
    return {
    }
  },
  props: {
    msg: String,
  },
  components: {
    PostExcerpt, Paggination
  },
  methods: {
    
  },
  mounted() {
  },
  created() {
    this.$store.dispatch("a/fetchPosts")
  },
  computed: {
    ...mapState('a', ['posts']),
    ...mapGetters('a', ['postPagesCount']),
    
  },
  watch:{
    $route(to, from){
      if(to.query != from.query){
        this.$store.dispatch("a/fetchPosts", to.query.page);
      }

    }
  }
};
</script>

<style scoped lang="scss">

</style>
