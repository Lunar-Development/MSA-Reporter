<template>
  <div id="app">
    <LoginBar />
  </div>
</template>

<script>
import LoginBar from './components/LoginBar.vue'

export default {
  name: 'App',
  components: {
    LoginBar
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
  border-radius: 50%;
  cursor: pointer;
}
input:focus {
    outline: none;
  }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
