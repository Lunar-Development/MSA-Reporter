<template>
  <div id="view-reports">
    <h1>
      Hello, you've hit the reports view. Check the console.
    </h1>
    <ul class="report-table">
      <li class="report-table-title">
        <div>
          Trainee Name
        </div>
        <div>
          Date
        </div>
      </li>
      <li v-for="report in historicalReports.reports" :key="report.id">
        <router-link :to="{ name: 'Report', params: {id: report.id} }"
          tag="p"
          id="login-radio-submit">

          <div> {{ report.trainee }}</div>
          <div> {{ report.date }}</div>
          </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import ReportHistory from '../data/report-history.json';

export default {
  name: 'ReportsTable',
  data() {
    return {
      historicalReports: {}
    }
  },
  beforeMount(){
    this.readHistoricalReports()
 },
  methods: {
    readHistoricalReports() {
      this.historicalReports = ReportHistory;
    },
    getHistroicalReports() {
      console.log(this.historicalReports)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#view-reports {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.report-table {
  width: 600px;
}

.report-table > li {
  list-style-type: none;
  padding: 10px;
  cursor: pointer;
}

.report-table > li > * {
  display: flex;
  justify-content: space-between;
}

.report-table > li:nth-child(odd) {
  background-color: rgb(236, 234, 234);
}
.report-table > li:nth-child(even) {
  background-color: lightblue;
}

.report-table-title {
  display: flex;
  justify-content: space-between;
  font-weight: 900;
  font-size: 24px;
}
</style>
