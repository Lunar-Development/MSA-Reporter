<template>
  <div id="view-reports">
    <HeaderBar />
    <NavBar />
    <ReportsTable />
  </div>
</template>

<script>
import ReportsTable from '../components/ReportsTable.vue';
import HeaderBar from '../components/HeaderBar.vue';
import NavBar from '../components/NavBar.vue';

export default {
  name: 'ViewReports',
  components: {
    NavBar,
    HeaderBar,
    ReportsTable
  }
}
</script>
<style scoped>
</style>