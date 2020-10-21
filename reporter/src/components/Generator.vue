<template>
  <div class="gen-bar">
    <select v-if="subject == 'Crew'" v-model="selected">
      <option disabled value=""> Select Crew </option>
      <option v-for="crews in reportData.Crew.Crews" :key="Object.keys(crews)[0]">{{Object.keys(crews)[0]}}</option>
    </select>
    <span>From :</span>
    <input 
      v-model="startDate"
      type="date" 
      name="startDate" 
      min="2020-01-01" 
      max="2030-12-31"
    >
    <span>To :</span>
    <input 
      v-model="endDate"
      type="date" 
      name="endDate" 
      value=""
      min="2020-01-01" 
      max="2030-12-31"
    >
    <button @click="generateReports">
      Generate {{subject}} Report
    </button>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: ['subject', 'reportData'],
  data() {
    return {
      startDate: undefined,
      endDate: undefined,
      selected: ''
    }
  },
  methods: {
    generateReports()
    {
      if (!this.startDate || !this.endDate) return;

      let startDate = new Date(this.startDate);
      let endDate = new Date(this.endDate);
      console.log(this.startDate)

      let newReportCollection = [];
      if (this.subject == 'Crew')
      {
        let allCrews = this.reportData.Crew.Crews;
        allCrews.forEach(crew => {
          if (Object.keys(crew)[0] == this.selected)
          {
            let allTrainees = [];
            crew[Object.keys(crew)[0]].Trainees.forEach(trainee => {
              allTrainees.push({
                'traineeName': Object.keys(trainee)[0],
                'traineeReports': trainee[Object.keys(trainee)[0]].reports
              })
            })
            allTrainees.forEach(trainee => {
              for (let i = 0; i < trainee.traineeReports.length; i++)
              {
                console.log(trainee.traineeReports[i].date)
                if (new Date(trainee.traineeReports[i].date) >= startDate && new Date(trainee.traineeReports[i].date) <= endDate) {
                  newReportCollection.push(trainee.traineeReports[i])
                }
              }
            })
          }
        })
      }
      console.log(newReportCollection)
    },
    submitReportToDatabase()
    {

    }
  }
}
</script>

<style scoped>
  .gen-bar {
    position: fixed;
    z-index: 0;
    right: 0;
    top: 0;
    width: 300px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 6px 7px 7px 4px;
    background-color: white;
    transition: all 0.6s;
  }

  button:hover {
    background-color: rgba(66, 118, 139, 1) !important;
    color: white;
    border-color: white;
  }
</style>
