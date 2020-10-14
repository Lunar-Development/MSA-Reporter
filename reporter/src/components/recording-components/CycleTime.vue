<template>
  <div id="cycle-time">
      <h1>
        Cycle Time Calculator
      </h1>
      <p>
        {{cycleResults}}
      </p>
    <div id="cycle-time-content">
      <div>
        <h2>Cycle {{cycleCount}}</h2>
        <button @click="startTimer()">
          Start
        </button>
        <button @click="stopTimer()">
          Stop
        </button>
        <p>
          Time difference {{ timeDifference }}
        </p>
      </div>
      
    </div>
  </div>
</template>

<script>
import Timer from '../../js/Timer';

export default {
  name: 'CycleTime',
  data() {
    return {
      timeDifference: '',
      cycleCount: 1,
      cycleResults: []
    }
  },
  beforeMount()
  {
    this.timer = new Timer();
  },
  methods: {
    startTimer()
    {
      this.timer.startTimer()
    },
    stopTimer()
    {
      this.timer.stopTimer()
      this.timeDifference = this.timer.getTimeDifference();
      let cycleName = 'Cycle ' + this.cycleCount;
      this.cycleResults.push({
        [cycleName]: this.timeDifference
      })
      this.cycleCount++;
      console.log(this.cycleResults)
    },
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
    /* flex-direction: column; */
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
