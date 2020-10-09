<template>
  <div class="nav-bar" :class="{show: show}">
    <div @click="toggleView()" id="nav-bar-tab">
      <img id="tab-icon" src='../assets/icons/chevron.svg' />
    </div>
    <div class="nav-selections">
      <div @click="changeTableValue('Trainee')">
        Trainee
      </div>
      <div @click="changeTableValue('Crew')">
        Crew
      </div>
      <div @click="changeTableValue('Site')">
        Site
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      show: true,
      tableValue: 'trainee'
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
    changeTableValue(tableValue) {
      this.$emit('clicked', tableValue)
    }
  }
}
</script>

<style scoped>
  .nav-bar {
    position: fixed;
    z-index: 0;
    left: 0;
    top: 0;
    width: 200px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 6px 7px 7px -8px;
    background-color: white;
    transition: all 0.6s;
  }

  .nav-selections {
    width: 100%;
  }
  .nav-selections > div {
    background-color: white;
    padding: 20px;
    cursor: pointer;
    font-weight: 500;
  }
  .nav-selections > div:hover {
    background-color: #DCDCDC;
  }

  #nav-bar-tab {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 200px;
    top: -250px;
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
    left: -200px !important;
  }
</style>
