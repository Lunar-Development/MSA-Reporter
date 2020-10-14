<template>
  <div id="observations">
    <div id="observations-content">
      <h1>
        Observations Record
      </h1>
      <Matrix @observationsSubmitted="passObservation" :markingCriteria="criteria" :method="method"/>
    </div>
  </div>
</template>

<script>
import Matrix from './tools/Matrix'
export default {
  name: 'Observations',
  props: ['criteria', 'method'],
  components: {
    Matrix
  },
  methods: {
    passObservation(value)
    {
      this.$emit('observationsSubmitted', value)
    }
  },
  data() {
    return {
      observationsObject: {},
    }
  }
}
</script>

<style scoped>
  #observations {
    width: 100vw;
    height: 500px;
    position: relative;
    border-radius: 15px;
    box-shadow: 0px 0px 15px -8px;
    background-color: white;
  }

  #observations {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-bottom: 40px;
  }

  #observations > button {
    background-color: #F2EFEF;
    border: 0;
    width: 300px;
    margin: 5px 0 5px 0;
  }
</style>
