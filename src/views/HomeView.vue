<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <HelloWorld msg="Welcome to Your Vue.js App" />
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
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    SideBar

  },
};
</script>
