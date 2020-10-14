<template>
  <div id="session">
    <HeaderBar />
    <div class="details">
      <div>
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
      <div id="new-session-radio">
        <div class="radio-buttons">
            <button @click="selectCycle()" :class="{selected: cycleSelect.selected}">Cycle Time</button>
            <button @click="selectObservations()" :class="{selected: observationSelect.selected}">Observations</button>
        </div>
      </div>
    </div>
    <div v-if="methodSelected == 'observations'">
      <Observations/>
    </div>
    <div v-if="methodSelected == 'cycle'">
      <CycleTime/>
    </div>
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar.vue';
import CycleTime from '../components/CycleTime.vue';
import Observations from '../components/Observations.vue';

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
      date: '',
      methodSelected: 'none',
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
  },
  methods: {
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
    height: 200px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .details > * {
    display: inline-block;
  }

  #new-session-radio {
  }

  li > * {
    text-transform:capitalize;
    display: inline-block;
    padding-left: 20px;
    margin: 0;
  }

</style>
