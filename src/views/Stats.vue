<template>
  <div class="about">
    <h1>Covid 19 Statistics</h1>
    <tableData :data="countriesInfo"></tableData>
  </div>
</template>

<script>
import tableData from '@/components/table'
export default {
  name: 'Stat',
  components: {
    tableData
  },
  data: function() {
    return {
      countriesInfo: []
    }
  },
  mounted() {
   
    this.axios.get(this.$store.state.apiUrl + "countries")
      .then((response) => {
        if(response.status == 200) {
          let d = response.data
          let info = []
          for (let index = 0; index < d.length; index++) {
            let country = {
              "id": d[index].id,
              "code": d[index].code,
              "name": d[index].name.ka,
              "confirmed": d[index].statistic.confirmed,
              "recovered": d[index].statistic.recovered,
              "deaths": d[index].statistic.deaths
            }
            info.push(country)
          }
            this.countriesInfo = info
        }
      })
      .catch(error => {
          console.log(error);
      });
  }
}
</script>