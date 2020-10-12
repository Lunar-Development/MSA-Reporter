<template>
  <div class="new-subject" :class="{show: show}">
    <div @click="toggleView()" id="new-subject-tab">
      <img id="tab-icon" src='../assets/icons/chevron.svg' />
    </div>
    <h1>
      CREATE NEW
    </h1>
      <div class="sessionButtonContainer">
        <button class="sessionButton" @click='showModal({"Trainee": {"1": "Site", "2": "Crew", "3": "Name"}})'>
          Trainee
        </button>
        <button class="sessionButton" @click='showModal({"Crew": {"1": "Site", "2": "Name"}})'>
          Crew
        </button>
        <button class="sessionButton" @click='showModal({"Site": {"1": "Name"}})'>
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
      addSubjectContent: {"Trainee": {"1": "Site", "2": "Crew", "3": "Name"}}
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
    showModal(content) {
      this.addSubjectContent = content;
    }
  }
}
</script>

<style scoped>
  .new-subject {
    position: fixed;
    z-index: 0;
    left: 0;
    top: 0;
    width: 200px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 6px 7px 7px -8px;
    background-color: white;
    transition: all 0.6s;
  }

  div.sessionButtonContainer {
    width: 100%;
    height: 500px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  #new-subject-tab {
    position: relative;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -250px;
    left: 500px;
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
    left: -500px !important;
  }

  button.sessionButton {
    border-radius: 15px;
    font-weight: 700;
    background-color: #F2EFEF;
    color: black;
    width: 200px;
    margin: 8px 0 8px 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  button.sessionButton:hover {
    color: white;
    background: #058E6E;
    border: 0;
  }
</style>
