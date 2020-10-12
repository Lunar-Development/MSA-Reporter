<template>
  <div id="add-subject">
    <h1>
      {{ subjectName }}
    </h1>
    <ul>
      <li v-for="subject in subject[subjectName]" :key="subject">
        <select  v-if="subject == 'Site'" v-model="siteSelected">
          <option disabled value="">Select Site</option>
          <option v-for="site in siteData.Sites" :key="site.id">{{ Object.keys(site)[0] }}</option>
        </select>
        <select  v-if="subject == 'Crew'" v-model="crewSelected">
          <option disabled value="">Select Crew</option>
          <option v-for="crew in crewData.Crews" :key="crew.id">{{ Object.keys(crew)[0] }}</option>
        </select>
        <input type="text" v-if="subject == 'Name'" v-model="nameSelected" placeholder="Name">
      </li>
    </ul>
    
    <button :class="{invalid: !validated}" @click="createObjectAndMergeWithDatabase()">
      Submit
    </button>
  </div>
</template>

<script>
import Firebase from '../database/Firebase.js';

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
      traineeData: ''
    }
  },
  beforeMount(){
    // this.writeDataToDatabase('Subjects', 'Crews', )
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
    createObjectAndMergeWithDatabase() {
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
          console.log(this.traineeData.Trainees)

          //TODO: submit to db
          this.writeDataToDatabase('Subjects', 'Trainees', this.traineeData)
        break;
        }
          
        case 'Crew': {
          //get last trainee ID
          let lastCrewName = Object.keys(this.crewData.Crews[this.crewData.Crews.length - 1])
          let lastCrewID = this.crewData.Crews[this.crewData.Crews.length - 1][lastCrewName].id;

          let newCrew = {};
          newCrew[this.nameSelected] = {};
          newCrew[this.nameSelected].site = this.siteSelected;
          newCrew[this.nameSelected].trainees = [];
          newCrew[this.nameSelected].id = (parseInt(lastCrewID) + 1).toString();

          //push to crews array
          this.crewData.Crews.push(newCrew)
          console.log(this.crewData.Crews)

          //TODO: submit to db
          this.writeDataToDatabase('Subjects', 'Crews', this.crewData)
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
      }
    }
  }
}
</script>

<style scoped>
  #add-subject {
    border: 1px solid grey;
    border-radius: 15px;
    width: 90%;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
  }

  .invalid {
    opacity: 0.1;
  }

  h1 {
    font-weight: 300
  }

  li {
    list-style-type: none;
  }

  input {
    font-size: 20px;
  }
  select {
    width: 100%;
    font-size: 20px;
  }
</style>
