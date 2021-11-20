<template>
  <div class="about">
    <switcher></switcher>
    <h2 class="mt-4">{{$t('c-19-stats')}}</h2>
    <small @click="logout" class="text-green-600 cursor-pointer">{{$t('logout')}}</small>
    <tableData></tableData>
  </div>
</template>

<script>
import tableData from '@/components/table'
import switcher from "@/components/langSwitcher";
export default {
  name: 'Stat',
  components: {
    tableData,
    switcher
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