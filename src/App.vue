<template>
  <div id="app">
    <NavBar />
    
  <router-view v-slot="{ Component,route }">
    <transition name="fade" mode="out-in">
      <div :key="route.name">  
        <component :is="Component" />
      </div>
    </transition>
  </router-view>


    <FooterVue />
    <TheLoader />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterVue from "./components/Footer.vue";
import TheLoader from "./components/TheLoader.vue";

export default {
  components: {
    NavBar,
    FooterVue,
    TheLoader
  },
  created(){
    this.$store.dispatch("fetchIP");
    // this.$store.dispatch("b/login/autoLogin");
    // this.$store.dispatch("fetchMenus")
  }
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
