<template>
  <div class="about">
    <h2 class="mt-4">Covid 19 Statistics</h2>
    <small @click="logout" class="text-green-600 cursor-pointer">Logout</small>
    <tableData></tableData>
  </div>
</template>

<script>
import tableData from '@/components/table'
export default {
  name: 'Stat',
  components: {
    tableData
  },
  methods: {
    logout() {
      this.axios.post(this.$store.state.apiUrl + "logout")
      .then((response) => {
        if(response.status == 200) {
          // set token and user info
          this.$store.commit('setToken', null)
          this.$store.commit('setUser', null)
          localStorage.removeItem('token')
          this.$router.push('/')
        }
      })
      .catch(error => {
          console.log(error);
      });
    }
  }
}
</script>