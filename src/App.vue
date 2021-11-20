<template>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
export default {
  mounted() {
    this.axios.get("/config.json")
    .then((response) => {
      if(response.data.apiUrl) {
        // set token and user info
        this.$store.commit('setApiUrl', response.data.apiUrl)
      }
    })
    const token = localStorage.getItem('token')
    // console.log(token, "token");
    if(token) {
      this.$store.commit('setToken', token)
      this.axios.defaults.headers.common['Authorization'] = "Bearer "+token;
    }
  }
}
</script>