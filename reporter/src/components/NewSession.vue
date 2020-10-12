<template>
  <div id="new-session">
      <router-link :to="{ name: 'ViewReports' }"
          tag="button"
          class="sessionButton">
          View Reports
      </router-link>
    <div class="banner">
      <h1>
        New Session
      </h1>
      <h2>Trainer: Fill Here</h2>
      <h2>Date: Auto Generated</h2>
    </div>
    <div class="form">
      <button>
        Cycle Time Calculator
      </button>
      <button>
        Observations Reporter
      </button>
      <select>
        <option disabled value="">Select Trainee</option>
        <option>Trainee A </option>
      </select>
      <button>
        Start Session
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NewSession',
}
</script>

<style scoped>
  #new-session {
    display: flex;
    /* height: calc(100vh - 200px); */
    justify-content: center;
    align-items: center;
  }
</style>
