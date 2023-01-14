<template>
  <div>
    <article v-for="post in posts" :key="post.id">
      <h3>
        <router-link :to="post.slug">{{ post.title.rendered }}</router-link>
      </h3>
      <section v-once v-html="removeMoreLink(post.excerpt.rendered,post.slug)"></section>
      <footer>
        <p v-once>Published: {{ post.date }}</p>
      </footer>
    </article>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods:{
    removeMoreLink(v){
      let parser = new DOMParser();
      const doc = parser.parseFromString(v, "text/html");
      let links = doc.getElementsByClassName("more-link");
      [...links].forEach((link) => {
        // link.setAttribute("href", "#");
        link.remove();
      });
      // console.dir(doc);
      // console.log(doc.documentElement.innerHTML);
      return doc.documentElement.innerHTML;
    },
  },
  created() {
    // console.log('modulePost');
    this.$store.dispatch("a/fetchPosts");
  },
  computed: {
    ...mapState('a', ['posts'])
  },
  filters:{
    removeMoreLink:function(v){
      console.log('brown fox',v);
    },
  },
  mounted() {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
