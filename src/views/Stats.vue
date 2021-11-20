<template>
  <div class="about">
    <h2 class="mt-4">Covid 19 Statistics</h2>
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
  data: function() {
    return {
      countriesInfo: []
    }
  },
}
</script>