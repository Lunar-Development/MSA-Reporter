<template>
  <div>
    <HeaderBar />
    <div class="container">
      <p>
        {{ report }}
      </p>
      <button>SAVE</button>
      <button>PRINT</button>
    </div>
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar.vue';
import Firebase from '../database/firebase.js';

export default {
  name: 'Report',
  components: {
    HeaderBar,
  },
  data() {
    return {
      reportParams: {
        "title": "",
        "category": "",
        "id": ""
      },
      reportKeys: '',
      subjects: [],
      reports: [],
      report: undefined
    }
  },
  mounted(){
    this.findReportData().then(this.setReportData);
  },
  methods: {
    async findReportData() {
      let urlParams = this.$router.currentRoute.path.split('/').splice(1);
      this.reportParams.title = urlParams[0];
      this.reportParams.category = urlParams[1];
      this.reportParams.id = urlParams[2];

      return this.reportParams;
    },
    async setReportData() {
      this.firebaseConnection = new Firebase();
      switch(this.reportParams.category){
      case 'Trainee':
        this.reportKeys = await this.firebaseConnection.readData('Subjects', 'Trainees')
        break;
      case 'Crew':
        this.reportKeys = await this.firebaseConnection.readData('Subjects', 'Crews')
        break;
      case 'Site':
        this.reportKeys = await this.firebaseConnection.readData('Subjects', 'Sites')
      }

      let keyName = Object.keys(this.reportKeys)[0];
      for (let i = 0; i < this.reportKeys[keyName].length; i++)
      {
        this.subjects.push(this.reportKeys[keyName][i][Object.keys(this.reportKeys[keyName][i])[0]])
      }

      this.subjects.forEach(subject => {
        if (subject.reports)
        {
          for (let i = 0; i < subject.reports.length; i ++)
          {
            this.reports.push(subject.reports[i])
          }
        }
      })
        
      this.report = this.reports.filter(report => this.reportParams.id == report.id)[0];
    }
  }
}
</script>

<style scoped>

</style>
