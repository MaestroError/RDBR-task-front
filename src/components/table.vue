<template>
  <div class="container mx-auto mt-8">
    <div class="py-2" style="text-align: left">
      <label></label>
      <input class="w-100 border-b-2 border-green-600" :placeholder="$t('search')" v-model="searchTerm" />
    </div>
    <div class="mt-2">
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider relative">
                      <span  @click="changeSort('id', 'next', 'int')" class="cursor-pointer">
                        ID
                      </span>
                      <span class="absolute right-2 cursor-pointer " v-if="sortField == 'id'">
                        <img @click="changeSort('id', 'asc', 'int')" v-if="sortOrder == 'desc'" src="@/assets/up.png" alt="" class="arrow">
                        <img @click="changeSort('id', 'desc', 'int')" v-if="sortOrder == 'asc'" src="@/assets/down.png" alt="" class="arrow">
                      </span>
                    </th>
                    <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider relative">
                      <span  @click="changeSort('code', 'next', 'string')" class="cursor-pointer">
                        {{$t('code')}}
                      </span>
                      <span class="absolute right-2 cursor-pointer " v-if="sortField == 'code'">
                        <img @click="changeSort('code', 'asc', 'string')" v-if="sortOrder == 'desc'" src="@/assets/up.png" alt="" class="arrow">
                        <img @click="changeSort('code', 'desc', 'string')" v-if="sortOrder == 'asc'" src="@/assets/down.png" alt="" class="arrow">
                      </span>
                    </th>
                    <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider relative">
                      <span  @click="changeSort('name', 'next', 'string')" class="cursor-pointer">
                        {{$t('name')}}
                      </span>
                      <span class="absolute right-2 cursor-pointer " v-if="sortField == 'name'">
                        <img @click="changeSort('name', 'asc', 'string')" v-if="sortOrder == 'desc'" src="@/assets/up.png" alt="" class="arrow">
                        <img @click="changeSort('name', 'desc', 'string')" v-if="sortOrder == 'asc'" src="@/assets/down.png" alt="" class="arrow">
                      </span>
                    </th>
                    <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider relative">
                      <span  @click="changeSort('confirmed', 'next', 'int')" class="cursor-pointer">
                        {{$t('confirmed')}}
                      </span>
                      <span class="absolute right-2 cursor-pointer " v-if="sortField == 'confirmed'">
                        <img @click="changeSort('confirmed', 'asc', 'int')" v-if="sortOrder == 'desc'" src="@/assets/up.png" alt="" class="arrow">
                        <img @click="changeSort('confirmed', 'desc', 'int')" v-if="sortOrder == 'asc'" src="@/assets/down.png" alt="" class="arrow">
                      </span>
                    </th>
                    <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider relative">
                      <span  @click="changeSort('recovered', 'next', 'int')" class="cursor-pointer">
                        {{$t('recovered')}}
                      </span>
                      <span class="absolute right-2 cursor-pointer " v-if="sortField == 'recovered'">
                        <img @click="changeSort('recovered', 'asc', 'int')" v-if="sortOrder == 'desc'" src="@/assets/up.png" alt="" class="arrow">
                        <img @click="changeSort('recovered', 'desc', 'int')" v-if="sortOrder == 'asc'" src="@/assets/down.png" alt="" class="arrow">
                      </span>
                    </th>
                    <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider relative">
                      <span  @click="changeSort('deaths', 'next', 'int')" class="cursor-pointer">
                        {{$t('deaths')}}
                      </span>
                      <span class="absolute right-2 cursor-pointer " v-if="sortField == 'deaths'">
                        <img @click="changeSort('deaths', 'asc', 'int')" v-if="sortOrder == 'desc'" src="@/assets/up.png" alt="" class="arrow">
                        <img @click="changeSort('deaths', 'desc', 'int')" v-if="sortOrder == 'asc'" src="@/assets/down.png" alt="" class="arrow">
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="country in dataProccessed" :key="country.id">
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

<style scoped>
  .arrow {
    max-width:15px;
  }
</style>

<script>
export default {
  data: function () {
    return {
      searchTerm: "",
      data: [],
      sortField: "id",
      sortOrder: "asc",
      sortType: "int"
    }
  },
  methods: {
    changeSort(field, order, type) {
      this.sortField = field
      if(order == "next") {
        this.sortOrder = this.sortOrder == "asc" ? "desc" : "asc"
      } else {
        this.sortOrder = order
      }
      this.sortType = type
    },
    
  },
  computed: {
    dataProccessed() {
      return this.data.filter((x) => {
          return x.id.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          x.code.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          x.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          x.confirmed.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          x.recovered.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          x.deaths.toLowerCase().includes(this.searchTerm.toLowerCase())
      }).sort((a, b) => {
        // Check data type
        if(this.sortType == "int") {
          // check order
          if(this.sortOrder == "desc") {
            return parseInt(a[this.sortField]) + parseInt(b[this.sortField]);
          } else {
            return parseInt(a[this.sortField]) - parseInt(b[this.sortField]);
          }
        }

        if(this.sortType == "string") {
          let fa = a[this.sortField].toLowerCase(),
          fb = b[this.sortField].toLowerCase();
          // check order
          if(this.sortOrder == "desc") {
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
          } else {
            if (fb < fa) {
                return -1;
            }
            if (fb > fa) {
                return 1;
            }
          }
          return 0;
        }
        
    });
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
              "confirmed": d[index].statistic.confirmed.toString(),
              "recovered": d[index].statistic.recovered.toString(),
              "deaths": d[index].statistic.deaths.toString()
            }
            if(this.$i18n.locale == "en") {
              country.name = d[index].name.en
            } else {
              country.name = d[index].name.ka
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