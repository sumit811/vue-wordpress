<template>
   <div>
    <PostExcerpt :post="post" v-for="post in posts" :key="post.id" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PostExcerpt from "./PostExcerpt.vue"

export default {
  name: "HelloWorld",
  data() {
    return {
    }
  },
  props: {
    msg: String,
  },
  components: {
    PostExcerpt
  },
  methods: {
    // onScroll ({ target: { scrollTop, clientHeight, scrollHeight }}) {
    //   if (scrollTop + clientHeight >= scrollHeight) {
    //     console.log('kkkk');
    //   }
    // },
    // loadMoreItems() {
    //   this.isLoading = true;
    //   console.info('isLoading = true');
    //   setTimeout(()=>{
    //     this.isLoading = false;
    //     console.warn('isLoading = false');
    //   },500);
    //   // setTimeout(() => {
    //   //   this.$store.dispatch("a/fetchPosts", count)
    //   //   .then(() => {
    //   //     count++
    //   //     this.busy = false;
    //   //   });
    //   //   this.isLoading = false;
    //   // }, 500);
    // },
    // loadMore: function () {
    //   console.log('loadmore', count);
    //   this.$store.dispatch("a/fetchPosts", count)
    //     .then(() => {
    //       count++
    //       this.busy = false;
    //     });
    // },
    // reachedBottom: function reachedBottom() {
    //   // const listElm = this.$refs.infiniteList
     
      
    // }
  },
  mounted() {
    this.reachedBottom();
  },
  created() {
    // console.log('modulePost');
    this.$store.dispatch("a/fetchPosts");
  },
  computed: {
    ...mapState('a', ['posts'])
  },
  // filters:{
  //   removeMoreLink:function(v){
  //     console.log('brown fox',v);
  //   },
  // },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
