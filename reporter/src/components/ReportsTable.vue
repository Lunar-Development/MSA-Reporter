<template>
  <div id="view-reports-table">
    <h1>
      Hi, I'm The Report Viewer
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
          tag="div"
          id="table-entry">
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

<style scoped>
#view-reports-table {
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.report-table {
  width: 600px;
  max-height: 600px;
  overflow-y: scroll;
  border: 1px solid #2A9D8F;
  border-radius: 10px;
  box-shadow: 6px 8px 7px -8px grey;
}

.report-table > li {
  list-style-type: none;
  padding: 10px 20px 10px 20px;
  cursor: pointer;
}

.report-table > li > * {
  line-height: 50px;
  display: flex;
  justify-content: space-between;
}

.report-table > li:nth-child(even) {
  background-color: rgba(203, 227, 235, 0.3);
}

.report-table-title {
  display: flex;
  justify-content: space-between;
  font-weight: 900;
  font-size: 24px;
}
</style>
