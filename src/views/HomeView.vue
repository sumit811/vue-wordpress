<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 post-box-js">
        <PostList msg="Welcome to Your Vue.js App" />
      </div>
      <div class="col-md-4">
        <SideBar />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SideBar from "@/components/SideBar.vue";
import PostList from "@/components/PostList.vue";

export default {
  name: "HomeView",
  components: {
    PostList,
    SideBar

  },
};
</script>
