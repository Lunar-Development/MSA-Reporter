<template>
  <div id="view-reports">
    <HeaderBar />
    <NavBar @clicked="handleTableValue"/>
    <div class="container">
      <router-link :to="{ name: 'ActionDashboard' }"
          tag="button"
          class="sessionButton">
          Create
      </router-link>
      <ReportsTable :tableValue="this.tableValue"/>
    </div>
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
  button {
    position: absolute;
    right: 30px;
  }
</style>