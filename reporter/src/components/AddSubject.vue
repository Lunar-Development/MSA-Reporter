<template>
  <div id="add-subject">
    <ul>
      <li v-for="subject in subject[subjectName]" :key="subject">
        <input type="text" v-if="subject == 'Name'" v-model="nameSelected" placeholder="Name">
        <select v-if="subject == 'Site'" v-model="siteSelected">
          <option disabled value=""> Select Site</option>
          <option v-for="site in siteData.Sites" :key="site.id">{{ Object.keys(site)[0] }}</option>
        </select>
        <select  v-if="subject == 'Crew'" v-model="crewSelected">
          <option disabled value="">Select Crew</option>
          <option v-for="crew in crewData.Crews" :key="crew.id">{{ Object.keys(crew)[0] }}</option>
        </select>
      </li>
    </ul>
    <button class="addButton" :class="{invalid: !validated}" @click="createObjectAndMergeWithDatabase()">
      +
    </button>
  </div>
</template>

<script>
import Firebase from '../database/firebase.js';

export default {
  name: 'AddSubject',
  props: ['subject'],
  data() {
    return {
      siteSelected: undefined,
      crewSelected: undefined,
      nameSelected: undefined,

      validated: false,
      subjectName: '',
      siteData: '',
      crewData: '',
      traineeData: '',
      trainerData: ''
    }
  },
  beforeMount(){
    this.getDataFromDatabase();
  },
  watch: {
    subject: {
      immediate: true, 
      handler () {
        this.setInputs()
      }
    },
    nameSelected: {
      immediate: true, 
      handler () {
        this.enableSubmit()
      }
    },
    crewSelected: {
      immediate: true, 
      handler () {
        this.enableSubmit()
      }
    },
    siteSelected: {
      immediate: true, 
      handler () {
        this.enableSubmit()
      }
    }
  },
  methods: {
    setInputs()
    {
      this.subjectName = Object.keys(this.subject)[0]
    },
    async getDataFromDatabase() 
    {
      this.firebaseConnection = new Firebase();
      
      this.traineeData = await this.firebaseConnection.readData('Subjects', 'Trainees')
      this.crewData = await this.firebaseConnection.readData('Subjects', 'Crews')
      this.siteData = await this.firebaseConnection.readData('Subjects', 'Sites')
      this.trainerData = await this.firebaseConnection.readData('Subjects', 'Trainers')
    },
    async writeDataToDatabase(subject, doc, data) 
    {
      this.firebaseConnection = new Firebase();
      this.firebaseConnection.writeData(subject, doc, data)
    },
    enableSubmit() {
      switch(this.subjectName) {
      case 'Trainee':
        if (this.siteSelected && this.crewSelected && this.nameSelected)
        {
          this.validated = true;
        }
        break;
        case 'Trainer':
        if (this.nameSelected)
        {
          this.validated = true;
        }
        break;
      case 'Crew':
        if (this.siteSelected && this.nameSelected)
        {
          this.validated = true;
        }
        break;
      case 'Site':
        if (this.nameSelected)
        {
          this.validated = true;
        }
        break;
      }
    },
    async updateTraineesInCrews()
    {
      //filter crewdata for correct crew
      let correctCrewFound = this.crewData.Crews.filter(crew => this.crewSelected == Object.keys(crew)[0])[0];
      //push traineedata to array
      correctCrewFound[this.crewSelected].Trainees.push(this.traineeData.Trainees[this.traineeData.Trainees.length - 1]);
      //overwrite trainees in crewdata
      this.firebaseConnection.writeData('Subjects', 'Crews', this.crewData)
    },
    async updateCrewsInSites()
    {
      let latestCrew = this.crewData.Crews[(this.crewData.Crews.length - 1)];
      // let targetSite = latestCrew.site;

      let currentSiteCrews = this.siteData.Sites.filter(site => this.siteSelected == Object.keys(site)[0])[0];
      currentSiteCrews[this.siteSelected].Crews.push(latestCrew);
      this.firebaseConnection.writeData('Subjects', 'Sites', this.siteData)
    },
    createObjectAndMergeWithDatabase() {
      if (this.validated) {
        switch(this.subjectName) {
          case 'Trainee': {
            //get last trainee ID
            let lastTraineeName = Object.keys(this.traineeData.Trainees[this.traineeData.Trainees.length - 1])
            let lastTraineeID = this.traineeData.Trainees[this.traineeData.Trainees.length - 1][lastTraineeName].id;

            let newTrainee = {};
            newTrainee[this.nameSelected] = {};
            newTrainee[this.nameSelected].site = this.siteSelected;
            newTrainee[this.nameSelected].crew = this.crewSelected;
            newTrainee[this.nameSelected].reports = [];
            newTrainee[this.nameSelected].id = (parseInt(lastTraineeID) + 1).toString();

            //push to trainees array
            this.traineeData.Trainees.push(newTrainee)

            //TODO: submit to db
            this.writeDataToDatabase('Subjects', 'Trainees', this.traineeData)
            
            this.updateTraineesInCrews();
            this.updateCrewsInSites();
          break;
          }
            
          case 'Crew': {
            //get last trainee ID
            let lastCrewName = Object.keys(this.crewData.Crews[this.crewData.Crews.length - 1])
            let lastCrewID = this.crewData.Crews[this.crewData.Crews.length - 1][lastCrewName].id;

            let newCrew = {};
            newCrew[this.nameSelected] = {};
            newCrew[this.nameSelected].site = this.siteSelected;
            newCrew[this.nameSelected].Trainees = [];
            newCrew[this.nameSelected].id = (parseInt(lastCrewID) + 1).toString();

            //push to crews array
            this.crewData.Crews.push(newCrew)

            //TODO: submit to db
            this.writeDataToDatabase('Subjects', 'Crews', this.crewData)
            this.updateCrewsInSites()
          break;
          }
            
            case 'Site': {
            //get last trainee ID
            let lastSiteName = Object.keys(this.siteData.Sites[this.siteData.Sites.length - 1])
            let lastSiteID = this.siteData.Sites[this.siteData.Sites.length - 1][lastSiteName].id;

            let newSite = {};
            newSite[this.nameSelected] = {};
            newSite[this.nameSelected].Crews = [];
            newSite[this.nameSelected].id = (parseInt(lastSiteID) + 1).toString();

            //push to sites array
            this.siteData.Sites.push(newSite)

            //TODO: submit to db
            this.writeDataToDatabase('Subjects', 'Sites', this.siteData)
          break;
          }

          case 'Trainer': {
            //get last trainee ID
            let lastTrainerName = Object.keys(this.trainerData.Trainers[this.trainerData.Trainers.length - 1])
            let lastTrainerID = this.trainerData.Trainers[this.trainerData.Trainers.length - 1][lastTrainerName].id;

            let newTrainer = {};
            newTrainer[this.nameSelected] = {};
            newTrainer[this.nameSelected].id = (parseInt(lastTrainerID) + 1).toString();

            //push to sites array
            this.trainerData.Trainers.push(newTrainer)

            //TODO: submit to db
            this.writeDataToDatabase('Subjects', 'Trainers', this.trainerData)
          break;
          }
        }
      }
    }
  }
}
</script>

<style scoped>
  #add-subject {
    width: 300px;
  }

  #add-subject select, option {
    width: 100%;
  }

  ul {
    list-style-type: none;
  }
</style>
