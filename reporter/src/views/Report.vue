<template>
  <div>
    <HeaderBar />
    <div class="container">
      <h1>
        {{ report.name }}
      </h1>
      <h2>
        {{ report.date }}
      </h2>
      <ul>
        <li>
          {{ report.results }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Trainee from '../data/report-history-trainee.json';
import Crew from '../data/report-history-crew.json';
import Site from '../data/report-history-site.json';

import HeaderBar from '../components/HeaderBar.vue';

export default {
  name: 'Report',
  components: {
    HeaderBar
  },
  data() {
    return {
      reportParams: {
        "title": "",
        "category": "",
        "id": ""
      },
      reportKeys: '',
      report: []
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
    setReportData() {
      switch(this.reportParams.category){
      case 'Trainee':
        this.reportKeys = Trainee;
        break;
      case 'Crew':
        this.reportKeys = Crew;
        break;
      case 'Site':
        this.reportKeys = Site;
      }
      this.report = this.reportKeys.reports.filter(report => this.reportParams.id == report.id)[0];
    }
  }
}
</script>

<style scoped>

</style>
