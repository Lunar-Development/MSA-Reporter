<template>
  <div id="view-reports-table">
    <h1>
      Hi, I'm The {{ tableValue }} Report Viewer
    </h1>
    <ul class="report-table">
      <li class="report-table-title">
        <div>
          {{ tableValue }} Name
        </div>
        <div>
          Date
        </div>
      </li>
      <li v-for="report in historicalReports.reports" :key="report.id">
        <router-link :to="{ name: 'Report', params: {id: report.id} }"
          tag="div"
          id="table-entry">
            <div> {{ report.name }}</div>
            <div> {{ report.date }}</div>
          </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Trainee from '../data/report-history-trainee.json';
import Crew from '../data/report-history-crew.json';
import Site from '../data/report-history-site.json'

export default {
  name: 'ReportsTable',
  data() {
    return {
      historicalReports: {}
    }
  },
  props: ['tableValue'],

  beforeMount(){
    this.readHistoricalReports()
  },

  watch: {
    tableValue: {
      immediate: true, 
      handler () {
        this.readHistoricalReports()
      }
    }
  },

  methods: {
    readHistoricalReports() {
      if (this.tableValue == 'Trainee')
      {
        this.historicalReports = Trainee;
      } else if (this.tableValue == 'Crew')
      {
        this.historicalReports = Crew;
      } else {
        this.historicalReports = Site;
      }
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
