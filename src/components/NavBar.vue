<template>
  <header class="p-3 mb-3 border-bottom">
    <div class="container">

      <div class="d-flex justify-content-between flex-wrap align-items-center ">
        <router-link to="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          <img :src="require('@/assets/logo.jpg')" class="mr-4 logo">
        </router-link>

        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><router-link to="/aboutus" class="nav-link px-2 link-dark">{{menuTitle.about}}</router-link></li>
          <li><router-link to="/authors" class="nav-link px-2 link-dark">{{menuTitle.authors}}</router-link></li>
          <li v-if="isLoggedIn"><router-link to="/profile" class="nav-link px-2 link-dark">{{menuTitle.profile}}</router-link></li>
          <li v-if="isLoggedIn"><a href="/logout" class="nav-link px-2 link-dark" @click.prevent="logout">{{menuTitle.logout}}</a>
          </li>
          <li v-if="!isLoggedIn"><router-link to="login" class="nav-link px-2 link-dark">{{menuTitle.login}}</router-link></li>
          <li><router-link to="/contactus" class="nav-link px-2 link-dark">{{menuTitle.contact}}</router-link></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 text-end" role="search" @submit.prevent="postSearch">
          <input type="search" class="form-control" :placeholder="searchPlaceholder" aria-label="Search" v-model="searchedTxt">
        </form>

      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "NavBar",
  data() {
    return {
      searchedTxt: '',
      searchPlaceholder:'Search....',
      menuTitle:{
        about:'About us',
        authors:'Our Authors',
        profile:'Profile',
        logout:'logout',
        login:'login',
        contact:'Contact us'
      }
    }
  },
  watch: {
    searchedTxt: function (newval) { //ewval,oldval
      console.log('watch searchedtxt')
      if (newval.length === 0) {
        console.log('watched newval length is 0')
        this.$store.commit("a/SET_SEARCHED_TRIGGER", false);
      }
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters['b/login/isUserLoggedin']
    },
  },
  methods: {

    logout() {
      this.$store.commit("b/login/LOGOUT_USER");
      this.$router.replace('/login');
    },
    postSearch() {
      this.$router.push(`/search?q=${this.searchedTxt}`).catch(() => { });
    }
  }
  //['b/login/fetchLogin']
}
</script>
<style scoped>
.logo {
  width: 100%;
}

.nav-link {
  padding-bottom: 5px;
}

.router-link-active {
  text-decoration: underline;
}
</style>