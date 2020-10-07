<template>
  <div id="login-radio">
    <div class="login-radio-buttons">
        <button @click="selectView()" :class="{selected: viewSelect.selected}">View</button>
        <button @click="selectCreate()" :class="{selected: createSelect.selected}">Create</button>
    </div>
    <router-link :to="{name: chosenPath}"
    tag="button"
    id="login-radio-submit">
    <span>GO</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'LoginRadio',
  data() {
    return {
      chosenPath: {},
      viewSelect: {
        selected: true
      },
      createSelect: {
        selected: false
      }
    }
  },
  methods: {
    selectView() {
      if (this.createSelect.selected) {
        this.createSelect.selected = false;
      }
      this.viewSelect.selected = true;
      this.chosenPath = 'ViewReports';
    },
    selectCreate() {
      if (this.viewSelect.selected) {
        this.viewSelect.selected = false;
      }
      this.createSelect.selected = true;
      this.chosenPath = 'CreateReports';
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #login-radio {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
  }

  .login-radio-buttons > button {
    width: 300px;
    font-size: 22px;
    border-radius: 0;
    opacity: 0.4;
    transition: 0.1s;
    border-color: #2A9D8F;
  }

  .selected {
    color: white;
    background-color: #2A9D8F;
    opacity: 1 !important;
  }

  #login-radio > div > button:nth-child(1) {
    border-right-width: 0.5px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  #login-radio > div > button:nth-child(2) {
    border-left-width: 0.5px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  #login-radio-submit {
    margin-top: 30px;
    font-size: 22px;
  }
  #login-radio-submit:hover {
    background-color: black;
    color: white;
  }

</style>
