<template>
  <PostList msg="Welcome to Your Vue.js App" />
</template>

<script>
// @ is an alias to /src
import PostList from "@/components/PostList.vue";

export default {
  name: "HomeView",
  components: {
    PostList,

  },
};
</script>
