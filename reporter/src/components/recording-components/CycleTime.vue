<template>
  <div id="cycle-time">
    <div id="cycle-time-content">
      <h1>
        Cycle Time Calculator
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CycleTime',
  data() {
    return {
    }
  }
}
</script>

<style scoped>
  #cycle-time {
    width: 100vw;
    height: 500px;
    position: relative;
    border-radius: 15px;
    box-shadow: 0px 0px 15px -8px;
    background-color: white;
  }

  #cycle-time-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom: 40px;
  }

  #cycle-time-content > button {
    background-color: #F2EFEF;
    border: 0;
    width: 300px;
    margin: 5px 0 5px 0;
  }
</style>
