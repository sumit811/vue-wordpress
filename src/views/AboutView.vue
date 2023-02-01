<template>
  <div class="container">
    <h1>{{page.title.rendered}}</h1>
    <div v-html="page.content.rendered"></div>
  </div>
</template>
<script>
export default{
  created(){
    this.$store.dispatch("fetchPage",590);
  },
  computed:{
    page:function(){
      return this.$store.state.page;
    }
  },
}
</script>