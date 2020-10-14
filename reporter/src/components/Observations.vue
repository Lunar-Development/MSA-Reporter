<template>
  <div id="observations">
    <div id="observations-content">
      <h1>
        Observations Calculator
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Observations',
  data() {
    return {
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
    justify-content: center;
    align-items: center;
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
