<template>
  <div id="view-reports-table">
    <router-link :to="{ name: 'ActionDashboard' }" tag="button">
        <img class="nav-icon" src='../assets/icons/pen.svg' />
    </router-link>
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
      <li v-for="report in reportCollection[tableValue]" :key="report.id">
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
import Firebase from '../database/firebase.js';

export default {
  name: 'ReportsTable',
  data() {
    return {
      historicalReports: {},
      reportCollection: {
        'Trainee': [],
        'Crew': [],
        'Site': []
      },
      firebaseConnection: {},
    }
  },
  props: ['tableValue'],

  beforeMount(){
    this.getDataFromDatabase()
  },
  watch: {
    tableValue: {
      immediate: true,
      handler()
      {
      }
    },
    reportCollection: {
      immediate: true, 
      handler () {
        // console.log('values updated')
        // console.log(this.reportCollection);
      }
    }
  },
  methods: {
    generateCrewReport()
    {
      console.log(this.crewReports.Crews)
    },
    generateSiteReport()
    {

    },
    async getDataFromDatabase() 
    {
      this.firebaseConnection = new Firebase();

      let traineeReports = await this.firebaseConnection.readData('Subjects', 'Trainees')
      this.crewReports = await this.firebaseConnection.readData('Subjects', 'Crews')
      this.siteReports = await this.firebaseConnection.readData('Subjects', 'Sites')

      // if (siteReports.Sites)
      // {
      //   for (let i = 0; i < siteReports.Sites.length; i ++)
      //   {
      //     let siteName = Object.keys(siteReports.Sites[i])[0];
      //     if (siteReports.Sites[i][siteName].reports)
      //     {
      //       let siteReportsCollection = siteReports.Sites[i][siteName].reports;
      //       for (let j = 0; j < siteReportsCollection.length; j++)
      //       {
      //         this.reportCollection.Site.push(siteReportsCollection[j])
      //       }
      //     }
      //   }
      // }
      
      // if (crewReports.Crews)
      // {
      //   for (let i = 0; i < crewReports.Crews.length; i ++)
      //   {
      //     let crewName = Object.keys(crewReports.Crews[i])[0];
      //     let trainees = crewReports.Crews[i][crewName].Trainees;
      //     for (let j = 0; j < trainees.length; j++)
      //     {
      //       this.reportCollection.Crew
      //     }
      //   }
      // }

      if (traineeReports.Trainees)
      {
        for (let i = 0; i < traineeReports.Trainees.length; i ++)
        {
          let traineeName = Object.keys(traineeReports.Trainees[i])[0];
          if (traineeReports.Trainees[i][traineeName].reports)
          {
            let traineeReportsCollection = traineeReports.Trainees[i][traineeName].reports;
            for (let j = 0; j < traineeReportsCollection.length; j++)
            {
              this.reportCollection.Trainee.push(traineeReportsCollection[j])
            }
          }
        }
      }
    }
  }
}
</script>

<style scoped>
#view-reports-table {
  display: flex;
  height: calc(100vh - 100px);
  margin-top: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.report-table {
  width: 600px;
  max-height: 500px !important;
  overflow: scroll;
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
