<template>
  <div id="view-reports">
    <HeaderBar />
    <ReportsTable />
  </div>
</template>

<script>
import ReportsTable from '../components/ReportsTable.vue';
import HeaderBar from '../components/HeaderBar.vue';

export default {
  name: 'ViewReports',
  components: {
    HeaderBar,
    ReportsTable
  }
}
</script>
<style scoped>
</style>