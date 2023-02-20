<template>
  <div id="app">
    <NavBar />
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <router-view :key="$route.fullPath"><!--:key="$route.fullPath"-->
          </router-view>
          <!--<router-view v-slot="{ Component, route }" :key="$route.fullPath">
            <div :key="route.name">
              <component :is="Component" />
            </div>
          </router-view>-->
        </div>
        <div class="col-md-4">
          <SideBar />
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
    // this.$store.dispatch("fetchMenu")
    // this.$store.dispatch("b/login/autoLogin");
    // this.$store.dispatch("fetchMenus")
  },
};
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
