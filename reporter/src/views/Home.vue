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
  list-style-type: none !important;
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

button.sessionButton {
  background: rgba(66, 118, 139, 1);
  border-radius: 15px;
  color: white;
  font-weight: 700;
  border: 0;
}

.addButton {
  border-radius: 100%;
  height: 50px;
  width: 50px;
  padding: 10px;
  background-color: rgba(66, 118, 139, 1);
  font-weight: 900;
  color: white;
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

.radio-buttons > button {
  width: 300px;
  font-size: 22px;
  border-radius: 0;
  transition: 0.1s;
  border-color: lightgray;
}

.selected {
  color: white;
  background-color: rgba(66, 118, 139, 1);
  opacity: 1 !important;
}

.radio-buttons > button:nth-child(1) {
  border-right-width: 0.5px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.radio-buttons > button:nth-child(2) {
  border-left-width: 0.5px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

#radio-submit {
  margin-top: 30px;
  font-size: 22px;
}
#radio-submit:hover {
  background-color: black;
  color: white;
}

select, option, input {
  height: 50px;
  -webkit-appearance:none;
  margin: 5px 0 5px 0;
  font-size: 22px;
  border: 0;
  background-color: white;
  border-bottom: 1px solid black;
  border-radius: 0;
}
input {
  border-bottom: 1px solid black;
}

.navButton {
  width: 100%;
  display: flex;
  justify-content: center
}

.nav-icon {
  height: 40px;
}
</style>

