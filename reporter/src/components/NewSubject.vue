<template>
  <div class="new-subject">
    <h1>
      CREATE NEW
    </h1>
    <div class="split">
      <div>
        <button @click='showModal({"Trainee": {"1": "Site", "2": "Crew", "3": "Name"}})'>
          Trainee
        </button>
        <button @click='showModal({"Crew": {"1": "Site", "2": "Name"}})'>
          Crew
        </button>
        <button @click='showModal({"Site": {"1": "Name"}})'>
          Site
        </button>
      </div>
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
      addSubjectContent: {"Trainee": {"1": "Site", "2": "Crew", "3": "Name"}}
    }
  },
  methods: {
    showModal(content) {
      this.addSubjectContent = content;
    }
  }
}
</script>

<style scoped>
  .new-subject {
    padding: 100px 0 100px 0;
    height: calc(100vh - 200px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
  }

  div.split {
    height: 90%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
  }

  div.split > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  button {
    min-width: 200px;
    font-size: 22px;
    margin: 10px;
    transition: 0.1s
  }
  button:hover {
    background-color: black;
    color: white;
  }
</style>
