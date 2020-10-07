<template>
  <div id="login-radio">
    <div class="login-radio-buttons">
        <button @click="selectView()" :class="{selected: viewSelect.selected}">View</button>
        <button @click="selectCreate()" :class="{selected: createSelect.selected}">Create</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginRadio',
  data() {
    return {
      viewSelect: {
        selected: false
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
    },
    selectCreate() {
      if (this.viewSelect.selected) {
        this.viewSelect.selected = false;
      }
      this.createSelect.selected = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #login-radio {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .login-radio-buttons > button {
    width: 300px;
    font-size: 22px;
    border-radius: 0;
    opacity: 0.4;
    transition: 0.1s;
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

</style>
