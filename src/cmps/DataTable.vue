<template>
  <table v-if="data && data.length > 0" class="data-table">
    <thead>
      <tr>
        <th>year</th>
        <th>item</th>
        <th>element</th>
        <th>value</th>
        <th>area code</th>
        <th>area</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data" :key="item.year">
        <td>{{ item.year }}</td>
        <td>{{ item.item }}</td>
        <td>{{ item.element }}</td>
        <td>{{ item.value }}</td>
        <td>{{ item.area_code }}</td>
        <td>{{ item.area }}</td>
      </tr>
    </tbody>
  </table>
  <h1 v-else>No data to show</h1>
</template>

<script>
export default {
  computed: {
    data() {
      return this.$store.getters.data.filter((item) => {
        return (
          item.value.toString().includes(this.$store.getters.searchTerm) ||
          item.year.toString().includes(this.$store.getters.searchTerm)
        );
      });
    },
  },
};
</script>