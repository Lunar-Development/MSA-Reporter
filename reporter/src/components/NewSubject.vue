<template>
  <div id="new-subject" :class="{show: show}">
    <div @click="toggleView()" id="new-subject-tab">
      <img id="tab-icon" src='../assets/icons/chevron.svg' />
    </div>
    <div id="new-subject-content">
      <h1>
        CREATE NEW
      </h1>
      <button :class="{selected: traineeSelected}" @click='showModal({"Trainee": {"1": "Site", "2": "Crew", "3": "Name"}}, "trainee")'>
        Trainee
      </button>
      <button :class="{selected: crewSelected}" @click='showModal({"Crew": {"1": "Site", "2": "Name"}}, "crew")'>
        Crew
      </button>
      <button :class="{selected: siteSelected}" @click='showModal({"Site": {"1": "Name"}}, "site")'>
        Site
      </button>
      <AddSubject :subject="this.addSubjectContent"/>
    </div>
  </div>
</template>

<script>
import AddSubject from './AddSubject'

export default {
  name: 'NewSubject',components: {
    AddSubject
  },
  data() {
    return {
      show: false,
      addSubjectContent: {"Trainee": {"1": "Site", "2": "Crew", "3": "Name"}},
      traineeSelected: true,
      crewSelected: false,
      siteSelected: false
    }
  },
  methods: {
    toggleView() {
      if (!this.show) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    showModal(content, type) {
      this.addSubjectContent = content;
      switch (type) {
        case 'trainee':
          this.traineeSelected = true;
          this.crewSelected = false;
          this.siteSelected = false;
          break;
          case 'crew':
          this.traineeSelected = false;
          this.crewSelected = true;
          this.siteSelected = false;
          break;
          case 'site':
          this.siteSelected = true;
          this.traineeSelected = false;
          this.crewSelected = false;
          break;
      }
    }
  }
}
</script>

<style scoped>
  #new-subject {
    width: 500px;
    height: 100vh;
    padding: 100px 20px 0 20px;
    position: absolute;
    box-shadow: 6px 7px 7px -8px;
    background-color: white;
    transition: all 0.6s;
  }

  #new-subject-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom: 40px;
  }

  #new-subject-content > button {
    background-color: #F2EFEF;
    border: 0;
    width: 300px;
    margin: 5px 0 5px 0;
  }

  #new-subject-content > button:hover, .selected {
    background-color: #058E6E !important;
    color: white;
  }

  #new-subject-tab {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 520px;
    width: 50px;
    height: 50px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: white;
    box-shadow: 6px 0 15px -8px;
    cursor: pointer;
  }
  #tab-icon {
    height: 30px;
  }

  .show {
    left: -530px !important;
  }
</style>
