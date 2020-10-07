<template>
  <div id="app">
    <router-view> </router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>
<style>
body {
  margin: 0;
}

h6 {
  font-size: 16px;
  margin: 0;
}

button {
  background-color: white;
  border: 0;
  padding: 20px;
  border: 1px solid black;
  cursor: pointer;
  border-radius: 15px;
}
input:focus {
    outline: none;
  }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

