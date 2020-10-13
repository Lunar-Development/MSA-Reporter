<template>
  <div id="new-session">
    <div class="navButton">
      <router-link :to="{ name: 'ViewReports' }" tag="button">
          <img class="nav-icon" src='../assets/icons/business-report.svg' />
      </router-link>
    </div>
    <div class="banner">
      <h1>
        New Session
      </h1>
      <h2>Select Trainer, Trainee and relevant Machinery</h2>
    </div>
    <div class="form">
      <div class="select-fields">
        <select>
          <option disabled value="">Select Excavator</option>
          <option>MST670</option>
        </select>
        <select>
          <option disabled value="">Select Trainer</option>
          <option>Bill Trainey</option>
        </select>
        <select>
          <option disabled value="">Select Trainee</option>
          <option>Alex Murray</option>
        </select>
        <select>
          <option disabled value="">Select Truck</option>
          <option>HGD9000</option>
        </select>
        <select>
          <option disabled value="">Select Session</option>
          <option>1</option>
        </select>
        <select>
          <option disabled value="">Select Method</option>
          <option>Dig</option>
        </select>
      </div>
      <div id="new-session-radio">
        <div class="radio-buttons">
            <button @click="selectCycle()" :class="{selected: cycleSelect.selected}">Cycle Time</button>
            <button @click="selectObservations()" :class="{selected: observationSelect.selected}">Observations</button>
        </div>
      </div>
      <button>
        GO
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NewSession',
  data() {
    return {
      cycleSelect: {
        selected: true
      },
      observationSelect: {
        selected: false
      }
    }
  },
  methods: {
    selectCycle() {
      if (this.observationSelect.selected) {
        this.observationSelect.selected = false;
      }
      this.cycleSelect.selected = true;
    },
    selectObservations() {
      if (this.cycleSelect.selected) {
        this.cycleSelect.selected = false;
      }
      this.observationSelect.selected = true;
    },
  }
}
</script>

<style scoped>
  #new-session {
    display: flex;
    height: 100vh;
    flex-direction: column;
    width: 100%;
    padding-top: 80px;
    border: 1px solid black;
    align-items: center;
  }

  #new-session-radio {
    margin-bottom: 40px;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .form > button {
    background-color: black;
    color: white;
    font-weight: 800;
  }

  .select-fields {
    width: 80%;
    text-align: center;
    padding: 20px 0 40px 0;
  }
  .select-fields > select {
    width: 45%;
    margin: 10px;
  }
</style>
