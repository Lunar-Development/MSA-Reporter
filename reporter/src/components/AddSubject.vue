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
    
    <button @click="createObjectAndMergeWithDatabase()">
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

      subjectName: '',
      siteData: '',
      crewData: '',
      traineeData: ''
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
    createObjectAndMergeWithDatabase() {
      //validate inputs
      switch(this.subjectName) {
      case 'Trainee':
        if (this.siteSelected && this.crewSelected && this.nameSelected)
        {
          //write to database
        } else {
          //ui invalid field
          console.log('invalid')
        }
        break;
      case 'Crew':
        if (this.siteSelected && this.nameSelected)
        {
          //write to database
        } else {
          //ui invalid field
          console.log('invalid')
        }
        break;
      case 'Site':
        if (this.nameSelected)
        {
          //write to database
        } else {
          //ui invalid field
          console.log('invalid')
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
