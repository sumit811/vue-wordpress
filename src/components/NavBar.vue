<template>
  <header class="py-3 mb-3 border-bottom">
    <div class="container">
      <!---->
      <header
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
        <router-link to="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          <img :src="require('@/assets/vuepress.png')" class="mr-4">
        </router-link>

        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><router-link to="/aboutus" class="nav-link px-2 link-dark">About us</router-link></li>
          <li><router-link to="/authors" class="nav-link px-2 link-dark">Our Authors</router-link></li>
          <li v-if="isLoggedIn"><router-link to="/profile" class="nav-link px-2 link-dark">Profile</router-link></li>
          <li v-if="isLoggedIn"><a href="/logout" class="nav-link px-2 link-dark" @click.prevent="logout">Logout</a>
          </li>
          <li v-if="!isLoggedIn"><router-link to="login" class="nav-link px-2 link-dark">Login</router-link></li>
          <li><router-link to="/contactus" class="nav-link px-2 link-dark">Contact us</router-link></li>
        </ul>

        <div class="col-md-3 text-end">
          <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search" @submit.prevent="postSearch">
            <input type="search" class="form-control" placeholder="Search..." aria-label="Search" v-model="searchedTxt">
          </form>
        </div>
      </header>
      
      <!---->
    </div>
  </header>
</template>
<script>
export default {
  name: "NavBar",
  data() {
    return {
      searchedTxt: ''
    }
  },
  watch: {
    searchedTxt: function (newval) { //ewval,oldval
      if (newval.length === 0) {
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