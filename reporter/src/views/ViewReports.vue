<template>
  <div id="view-reports">
    <HeaderBar />
    <NavBar @clicked="handleTableValue"/>
    <Generator v-if="tableValue != 'Trainee'" :subject="this.tableValue"/>
    <ReportsTable :tableValue="this.tableValue"/>
  </div>
</template>

<script>
import ReportsTable from '../components/ReportsTable.vue';
import HeaderBar from '../components/HeaderBar.vue';
import NavBar from '../components/NavBar.vue';
import Generator from '../components/Generator.vue';

export default {
  name: 'ViewReports',
  components: {
    NavBar,
    HeaderBar,
    ReportsTable,
    Generator
  },
  data() {
    return {
      tableValue: 'Trainee'
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