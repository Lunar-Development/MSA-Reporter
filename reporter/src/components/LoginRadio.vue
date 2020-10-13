<template>
  <div id="radio">
    <div class="radio-buttons">
        <button @click="selectView()" :class="{selected: viewSelect.selected}">View</button>
        <button @click="selectCreate()" :class="{selected: createSelect.selected}">Create</button>
    </div>
    <router-link :to="{name: chosenPath}"
    tag="button"
    id="radio-submit">
    <span>GO</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'LoginRadio',
  data() {
    return {
      chosenPath: 'ViewReports',
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
      this.chosenPath = 'ActionDashboard';
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #radio {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100vh;
      align-items: center;
      justify-content: center;
    }
</style>
