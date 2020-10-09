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
      <li v-for="report in reportCollection[tableValue].reports" :key="report.id">
        <router-link :to="{ name: 'Report', params: {category: tableValue, id: report.id} }"
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
import Firebase from '../database/Firebase.js';

export default {
  name: 'ReportsTable',
  data() {
    return {
      historicalReports: {},
      reportCollection: {
        'Trainee': '',
        'Crew': '',
        'Site': ''
      },
      firebaseConnection: {}
    }
  },
  props: ['tableValue'],

  beforeMount(){
    this.getDataFromDatabase()
  },
  watch: {
    tableValue: {
      immediate: true, 
      handler () {
        this.readHistoricalReports()
      }
    },
    reportCollection: {
      immediate: true, 
      handler () {
        console.log('values updated')
        console.log(this.reportCollection)
      }
    }
  },
  methods: {
    async getDataFromDatabase() 
    {
      this.firebaseConnection = new Firebase();
      this.reportCollection.Trainee = await this.firebaseConnection.readData('Reports', 'Trainee')
      this.reportCollection.Crew = await this.firebaseConnection.readData('Reports', 'Crew')
      this.reportCollection.Site = await this.firebaseConnection.readData('Reports', 'Site')
    },
    readHistoricalReports()
    {
      switch(this.tableValue) {
      case 'Trainee':
        console.log(this.reportCollection.trainee);
        break;
      case 'Crew':
        console.log(this.reportCollection);
        break;
      case 'Site':
        console.log(this.reportCollection);
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
