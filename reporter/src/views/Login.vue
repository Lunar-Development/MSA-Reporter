<template>
  <div id="login">
    <LoginBar />
    <LoginRadio />
  </div>
</template>

<script>
import LoginBar from '../components/LoginBar.vue'
import LoginRadio from '../components/LoginRadio.vue'

export default {
  name: 'App',
  components: {
    LoginBar,
    LoginRadio
  }
}
</script>

<style>
#login {
  display: flex;
  flex-direction: row;
  text-align: center;
}
</style>
