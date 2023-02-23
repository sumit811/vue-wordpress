<template>
  <fragment>
    <h1>{{ page.title.rendered }}</h1>
    <div v-html="page.content.rendered"></div>
  </fragment>
</template>
<script>
export default {
  created() {
    this.$store.dispatch("fetchPage", 590);
  },
  computed: {
    page: function () {
      return this.$store.state.page;
    }
  },
}
</script>