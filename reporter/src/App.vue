<template>
  <div id="app">
    <LoginBar />
    <LoginRadio />
  </div>
</template>

<script>
import LoginBar from './components/LoginBar.vue'
import LoginRadio from './components/LoginRadio.vue'

export default {
  name: 'App',
  components: {
    LoginBar,
    LoginRadio
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
  display: flex;
  flex-direction: row;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
