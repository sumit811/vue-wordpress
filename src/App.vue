<template>
  <div id="app">
    <NavBar />
    <div class="container">
      <div class="row">
        <div :class="{ 'col-md-8':shouldShowSidebar,'col-md-12':!shouldShowSidebar }">
          <router-view ></router-view>
        </div>
        <div class="col-md-4" v-if="shouldShowSidebar">
          <SideBar v-if="shouldShowSidebar"/>
        </div>
      </div>
    </div>
    <FooterVue />
    <TheLoader />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import SideBar from "@/components/SideBar.vue";
import FooterVue from "./components/Footer.vue";
import TheLoader from "./components/TheLoader.vue";
import mixinOne from "./mixin/mixinOne.js"

export default {
  components: {
    NavBar,
    SideBar,
    FooterVue,
    TheLoader
  },
  mixins: [mixinOne],
  created() {
    this.$store.dispatch("fetchIP");
  },
  computed:{
    shouldShowSidebar(){
        return this.$route.meta.sidebar!=false;
    }
  }
};
</script>

<style lang="scss">
</style>
