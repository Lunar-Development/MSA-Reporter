<template>
  <div id="matrix">
    <ul class="table">
      <li class="table-title">
        <div>
          {{ method }} Performance Criteria
        </div>
      </li>
      <li class="rowContainer" v-for="values in markingCriteria" :key="values.id">
        <div>
          <p>
          {{ Object.keys(markingCriteria).find(key => markingCriteria[key] === values) }}
          </p>
        </div>
        <button @click="updateObservationsObject(Object.keys(markingCriteria).find(key => markingCriteria[key] === values), value)" class="clickableCriteria" v-for="value in values.values" :key="value"> 
          {{ value }}
        </button>
      </li>
    </ul>
    <button @click="submitObject()">
      Submit Observations
    </button>
  </div>
</template>

<script>
export default {
  name: 'Matrix',
  props: ['markingCriteria', 'method'],
  data() {
    return {
      observationsObject: {}
    }
  },
  methods: {
    updateObservationsObject(value, key)
    {
      this.observationsObject[value] = key;
    },
    submitObject()
    {
      this.$emit('observationsSubmitted', this.observationsObject)
    }
  }
}
</script>

<style scoped>
  #matrix {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #matrix > button:hover {
    color: white;
    background-color: rgba(66, 118, 139, 1);
    border-color: white;
  }

  .table {
    width: 90vw;
    max-height: 600px;
    overflow-y: scroll;
    border: 1px solid #2A9D8F;
    border-radius: 10px;
    box-shadow: 6px 8px 7px -8px grey;
  }

  .rowContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .clickableCriteria {
    border: 1px solid black;
    width: 200px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .table > li {
    list-style-type: none;
    padding: 10px 20px 10px 20px;
  }

  li > div {
    min-width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li button:hover, .selected {
    background-color: rgba(66, 118, 139, 1) !important;
    color: white;
    border-color: white;
  }

  .table > li:nth-child(even) {
    background-color: rgba(203, 227, 235, 0.3);
  }

  .table-title {
    display: flex;
    justify-content: space-between;
    font-weight: 900;
    font-size: 24px;
  }
</style>
