<template>
  <div id="session">
    <HeaderBar />
    <div class="details">
      <div>
        <h1>
          Report Details
        </h1>
        <ul>
          <li :key="detail" v-for="detail in sessionDetails">
              <h2>
                {{ Object.keys(sessionDetails).find(key => sessionDetails[key] === detail) }} : 
              </h2>
              <p>
                {{ detail }}
              </p>
          </li>
          <li>
            <h2>
              Date :
            </h2>
            <p>
              {{this.date}} 
            </p>
          </li>
        </ul>
      </div>
      <div v-if="observationsSubmitted">
        <h1>
          Observations
        </h1>
          <ul>
            <li :key="detail" v-for="detail in observationsSubmitted">
                <h2>
                  {{ Object.keys(observationsSubmitted).find(key => observationsSubmitted[key] === detail) }} : 
                </h2>
                <p>
                  {{ detail }}
                </p>
            </li>
          </ul>
      </div>
      <div v-if="cycleTimesSubmitted">
        <h1>
          Cycle Times
        </h1>
          <ul>
            <li :key="detail" v-for="detail in cycleTimesSubmitted">
                <h2>
                  {{ Object.keys(detail)[0] }} :
                </h2>
                <p>
                  {{ detail[Object.keys(detail)[0]] }}
                </p>
            </li>
          </ul>
      </div>
      <div id="new-session-radio">
        <div class="radio-buttons">
            <button @click="selectCycle()" :class="{selected: cycleSelect.selected}">Cycle Time</button>
            <button @click="selectObservations()" :class="{selected: observationSelect.selected}">Observations</button>
        </div>
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
    }
  },
  beforeMount(){
    this.getDate();
    this.showSessionDetails();
    this.getCriteriaFromDatabase();
  },
  methods: {
    holdObservations(value)
    {
      this.observationsSubmitted = value;
    },
    holdCycleTimes(value)
    {
      this.cycleTimesSubmitted = value;
      console.log(this.cycleTimesSubmitted)
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
  .details {
    padding: 200px 100px 100px 100px;
    height: 350px;
    display: flex;
    justify-content: space-evenly;
  }

  .details > * {
    display: inline-block;
  }

  #new-session-radio {
    text-align: center;
  }

  #new-session-radio > button {
    margin-top: 40px;
  }

  li > * {
    text-transform:capitalize;
    display: inline-block;
    padding-left: 20px;
    margin: 0;
  }

  button:hover {
    color: white;
    background-color: rgba(66, 118, 139, 1);
    border-color: white;
  }

</style>
