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
        <input type="text" v-model="excavator" name="excavator" placeholder="Excavator">
        <select v-model="trainer">
          <option disabled value="">Select Trainer</option>
          <option v-for="trainer in trainerData" :key="trainer[Object.keys(trainer)].id">{{Object.keys(trainer)[0]}}</option>
        </select>
        <select v-model="trainee">
          <option disabled value="">Select Trainee</option>
          <option v-for="trainee in traineeData" :key="trainee[Object.keys(trainee)].id">{{Object.keys(trainee)[0]}}</option>
        </select>
        <input type="text" v-model="truck" name="truck" placeholder="Truck" />
        <input type="text" v-model="session" name="truck" placeholder="Session" />
        <select v-model="method">
          <option disabled value="">Select Method</option>
          <option>Dig</option>
        </select>
      </div>
      <router-link :to="{ name: 'Session', params: {excavator: excavator, truck: truck, trainee: trainee, trainer: trainer, method: method, session: session} }"
          tag="button">
            GO
        </router-link>
    </div>
  </div>
</template>

<script>
import Firebase from '../database/firebase.js';

export default {
  name: 'NewSession',
  data() {
    return {
      excavator: '',
      trainer: '',
      trainee: '',
      truck: '',
      method: '',
      session: '',


      siteData: {},
      crewData: {},
      traineeData: {},
      trainerData: {}
    }
  },
  beforeMount(){
    this.getDataFromDatabase();
  },
  methods: {
    async getDataFromDatabase() 
    {
      this.firebaseConnection = new Firebase();
      
      this.traineeData = await this.firebaseConnection.readData('Subjects', 'Trainees')
      this.crewData = await this.firebaseConnection.readData('Subjects', 'Crews')
      this.siteData = await this.firebaseConnection.readData('Subjects', 'Sites')
      this.trainerData = await this.firebaseConnection.readData('Subjects', 'Trainers')

      this.crewData = this.crewData.Crews
      this.siteData = this.siteData.Sites
      this.trainerData = this.trainerData.Trainers
      this.traineeData = this.traineeData.Trainees

    },
  }
}
</script>

<style scoped>
  #new-session {
    display: flex;
    margin-top: 100px;
    height: calc(100vh - 100px);
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
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
    width: 50%;
    text-align: center;
    padding: 20px 0 40px 0;
  }
  .select-fields > select, input {
    width: 45%;
    margin: 10px;
  }
</style>
