<template>
  <div id="session">
    <HeaderBar />
    <div class="reportDetails">
      <div class="previewBlock">
        <h1>
          Details
        </h1>
        <ul>
          <li :key="detail" v-for="detail in sessionDetails">
              <p>
                {{ Object.keys(sessionDetails).find(key => sessionDetails[key] === detail) }} : 
              </p>
              <p>
                {{ detail }}
              </p>
          </li>
          <li>
            <p>
              Date :
            </p>
            <p>
              {{this.date}} 
            </p>
          </li>
        </ul>
      </div>
      <div class="previewBlock" v-if="observationsSubmitted">
        <h1>
          Observations
        </h1>
          <ul>
            <li v-for="detail in observationsSubmitted" :key="detail">
                <p>
                  {{ Object.keys(observationsSubmitted).find(key => observationsSubmitted[key] === detail) }} : 
                </p>
                <p>
                  {{ detail }}
                </p>
            </li>
          </ul>
      </div>
      <div class="previewBlock" v-if="cycleTimesSubmitted">
        <h1>
          Cycle Times
        </h1>
          <ul>
            <li :key="Object.keys(detail)[0]" v-for="detail in cycleTimesSubmitted">
                <p>
                  {{ Object.keys(detail)[0] }} :
                </p>
                <p>
                  {{ detail[Object.keys(detail)[0]] }}
                </p>
            </li>
          </ul>
      </div>
    </div>
    <div class="submit">
      <button @click="submitReport()">
        Submit Report
      </button>
    </div>
    <div id="new-session-radio">
        <div class="radio-buttons">
            <button @click="selectCycle()" :class="{selected: cycleSelect.selected}">Cycle Time</button>
            <button @click="selectObservations()" :class="{selected: observationSelect.selected}">Observations</button>
        </div>
      </div>
    <div v-if="methodSelected == 'observations'">
      <Observations @observationsSubmitted="holdObservations" :criteria="criteria" :method="sessionDetails.method"/>
    </div>
    <div v-if="methodSelected == 'cycle'">
      <CycleTime @cycleTimesSubmitted="holdCycleTimes" :criteria="criteria" :method="sessionDetails.method"/>
    </div>
  </div>
</template>

<script>
import Firebase from '../database/firebase';
import HeaderBar from '../components/HeaderBar.vue';
import CycleTime from '../components/recording-components/CycleTime.vue';
import Observations from '../components/recording-components/Observations.vue';

export default {
  name: 'Session',
  components: {
    HeaderBar,
    CycleTime,
    Observations
  },
  data() {
    return {
      show: '',
      sessionDetails: Object,
      observationsSubmitted: false,
      cycleTimesSubmitted: false,
      date: '',
      criteria: undefined,
      methodSelected: 'cycle',
      cycleSelect: {
        selected: true
      },
      observationSelect: {
        selected: false
      },

      report: {}
    }
  },
  beforeMount(){
    this.getDate();
    this.showSessionDetails();
    this.getCriteriaFromDatabase();
  },
  methods: {
    submitReport()
    {
      this.report.name = this.sessionDetails.trainee;
      this.report.date = this.date;
      this.report.id = new Date().getTime();
      this.report.results = {
        'cycleTime': this.cycleTimesSubmitted,
        'observations': this.observationsSubmitted
      }

      this.saveReportToDatabase()
    },
    async saveReportToDatabase()
    {
      this.firebaseConnection = new Firebase();
      //grab current trainee document
      this.currentDocument = await this.firebaseConnection.readData('Subjects', 'Trainees');

      //indexof trainee
      let trainee = this.currentDocument.Trainees.find(obj => Object.keys(obj)[0] == this.sessionDetails.trainee);
      let traineeIndex = this.currentDocument.Trainees.indexOf(trainee);

      //push new report to trainee
      trainee[Object.keys(trainee)[0]].reports.push(this.report)
      //overwrite current document with new report pushed
      this.currentDocument.Trainees.splice(traineeIndex, 1);
      this.currentDocument.Trainees.push(trainee)

      this.firebaseConnection.writeData('Subjects', 'Trainees', this.currentDocument)
    },
    holdObservations(value)
    {
      this.observationsSubmitted = value;
    },
    holdCycleTimes(value)
    {
      this.cycleTimesSubmitted = value;
    },
    async getCriteriaFromDatabase()
    {
      this.firebaseConnection = new Firebase();
      this.criteria = await this.firebaseConnection.readData('Criteria', this.sessionDetails.method);
    },
    selectCycle() {
      if (this.observationSelect.selected) {
        this.observationSelect.selected = false;
      }
      this.cycleSelect.selected = true;
      this.methodSelected = 'cycle';
    },
    selectObservations() {
      if (this.cycleSelect.selected) {
        this.cycleSelect.selected = false;
      }
      this.observationSelect.selected = true;
      this.methodSelected = 'observations';
    },
    getDate()
    {
      this.date = new Date().toLocaleDateString("en-AUS");
    },
    showSessionDetails() 
    {
      let paramString = decodeURI(this.$router.resolve({name: 'Session'}).href);
      let paramArr = paramString.split('/');
      paramArr.shift();
      paramArr.shift();
      
      this.sessionDetails = {
        'excavator' : paramArr[0],
        'truck' : paramArr[1],
        'trainee': paramArr[2],
        'trainer': paramArr[3],
        'session': paramArr[4],
        'method': paramArr[5]
      }
    }
  }
}
</script>

<style scoped>
  .submit {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  }

  .submit > button:hover {
    background-color: #2A9D8F;
  }

  .reportDetails {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 100px 0 50px 0;
    flex-wrap: wrap;
  }

  .reportDetails > .previewBlock {
    width: 400px;
    margin: 0 30px 0 30px;
    border: 1px solid #2A9D8F;
    border-radius: 15px;
    max-height: 500px;
    overflow: scroll
  }

  .previewBlock > h1 {
    text-align: center;
  }

  .previewBlock li:nth-child(even) {
    background-color: rgba(203, 227, 235, 0.3);
  }

  li {
    padding: 0 50px 0 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
    text-transform: capitalize;
  }

  li > p:nth-child(1) {
    font-weight: 900;
  }

  #new-session-radio {
    text-align: center;
    margin-bottom: 50px;
  }

  #new-session-radio > button {
    margin-top: 40px;
  }

  button:hover {
    color: white;
    background-color: rgba(66, 118, 139, 1);
    border-color: white;
  }

</style>
