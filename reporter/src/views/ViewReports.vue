<template>
  <div id="view-reports">
    <HeaderBar />
    <NavBar @clicked="handleTableValue"/>
    <ReportsTable :tableValue="this.tableValue"/>
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
  },
  data() {
    return {
      tableValue: 'trainee'
    }
  },
  methods: {
    handleTableValue(value) {
      this.tableValue = value;
    }
  }
}
</script>
<style scoped>
</style>