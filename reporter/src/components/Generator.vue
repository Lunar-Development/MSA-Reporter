<template>
  <div class="gen-bar">
    <span>From :</span>
    <input 
      type="date" 
      name="startDate" 
      min="2020-01-01" 
      max="2030-12-31"
    >
    <span>To :</span>
    <input 
      type="date" 
      name="endDate" 
      value=""
      min="2020-01-01" 
      max="2030-12-31"
    >
    <button>
      Generate {{subject}} Report
    </button>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: ['subject'],
  data() {
    return {
      startDate: '',
      endDate: ''
    }
  },
  methods: {
    generateReports()
    {
      console.log('generating reports')
    }
  }
}
</script>

<style scoped>
  .gen-bar {
    position: fixed;
    z-index: 0;
    right: 0;
    top: 0;
    width: 300px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 6px 7px 7px 4px;
    background-color: white;
    transition: all 0.6s;
  }

  button:hover {
    background-color: rgba(66, 118, 139, 1) !important;
    color: white;
    border-color: white;
  }
</style>
