<template>
  <main>
    <SearchBar/>
     <Table />
  </main>

  
</template>

<script>
import Table from "./cmps/DataTable.vue";
import SearchBar from "./cmps/SearchBar.vue";
export default {
  components: {
    Table,
    SearchBar,
  },
  methods: {},
  async created() {
    await this.$store.dispatch({ type: "loadData" });
  },
};
</script>

<style>
@import "@/base.scss";
</style>
