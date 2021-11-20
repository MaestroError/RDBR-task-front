<template>
  <div class="container mx-auto mt-8">
    <div class="py-2" style="text-align: left">
      <label>SearchBy:</label>
      <input class="ml-4 w-100 border-b-2 border-green-600" v-model="searchTerm" />
    </div>
    <table-lite
      :columns="table.columns"
      :rows="table.rows"
      :total="table.totalRecordCount"
      :sortable="table.sortable"
    ></table-lite>
  </div>
  
</template>

<script>
import { defineComponent, reactive, ref, toRefs, computed } from "vue";
import TableLite from 'vue3-table-lite'
export default defineComponent({
  name: "Stats",
  components: { TableLite },
  props: {
    data: Array
  },
  mounted() {
    

    this.table.rows = computed(() => {
      return data.filter(
        (x) =>
          x.email.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          x.name.toLowerCase().includes(searchTerm.value.toLowerCase())
      );
    })
    this.table.totalRecordCount = data.length;
  },
  setup(props) {
    const searchTerm = ref(""); // Search text
    const { data } = toRefs(props)
    console.log(data);
    // Table config
    const table = reactive({
      columns: [
        {
          label: "ID",
          field: "id",
          width: "3%",
          sortable: true,
          isKey: true,
        },
        {
          label: "Code",
          field: "code",
          width: "10%",
          sortable: true,
        },
        {
          label: "Name",
          field: "name",
          width: "10%",
          sortable: true,
        },
        {
          label: "Confirmed",
          field: "confirmed",
          width: "15%",
          sortable: true,
        },
        {
          label: "Recovered",
          field: "recovered",
          width: "15%",
          sortable: true,
        },
        {
          label: "Deaths",
          field: "deaths",
          width: "15%",
          sortable: true,
        },
      ],
      sortable: {
        order: "id",
        sort: "asc",
      },
    });

    return {
      searchTerm,
      table
    };
  },
});
</script>