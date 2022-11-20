<template>
  <div class="center">
     <input class="search" @input="onSearch" type="number" placeholder="Search for year or value">
  </div>
</template>

<script>
export default {
methods:{
    onSearch(ev){
        this.$store.dispatch({ type: "searchData" ,searchTerm: ev.target.value});
    }
}
};
</script>