<template>
  <div class="container mx-auto mt-8">
    <div class="py-2" style="text-align: left">
      <label></label>
      <input class="w-100 border-b-2 border-green-600" @input="search" placeholder="Search" v-model="searchTerm" />
    </div>
    <div class="mt-2">
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Code
                    </th>
                    <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Confirmed
                    </th>
                    <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Recovered
                    </th>
                    <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Deaths
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="country in data" :key="country.id">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">{{ country.id }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">{{ country.code }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">{{ country.name }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">{{ country.confirmed }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">{{ country.recovered }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">{{ country.deaths }}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  data: function () {
    return {
      searchTerm: "",
      data: []
    }
  },
  methods: {
    search() {
      this.data = this.data.filter((x) => {
        x.id.toLowerCase().includes(this.searchTerm.value.toLowerCase()) ||
        x.code.toLowerCase().includes(this.searchTerm.value.toLowerCase()) ||
        x.name.toLowerCase().includes(this.searchTerm.value.toLowerCase()) ||
        x.confirmed.toLowerCase().includes(this.searchTerm.value.toLowerCase()) ||
        x.recovered.toLowerCase().includes(this.searchTerm.value.toLowerCase()) ||
        x.deaths.toLowerCase().includes(this.searchTerm.value.toLowerCase())
    })
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
              "id": d[index].id.toString(),
              "code": d[index].code,
              "name": d[index].name.ka,
              "confirmed": d[index].statistic.confirmed.toString(),
              "recovered": d[index].statistic.recovered.toString(),
              "deaths": d[index].statistic.deaths.toString()
            }
            info.push(country)
          }
            this.data = info
        }
      })
      .catch(error => {
          console.log(error);
      });
  }
}
</script>