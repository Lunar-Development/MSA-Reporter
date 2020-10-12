<template>
  <div id="app">
    <router-view> </router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>
<style>

.container {
  padding: 80px 40px 80px 40px;
}

ul {
  padding-left: 0;
}

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
  transition: all 0.1s;
  font-size: 18px;
}
/* button:hover {
  background-color: black;
  color: white;
} */

button.sessionButton {
  background: #058E6E;
  border-radius: 15px;
  color: white;
  font-weight: 700;
  border: 0;
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

