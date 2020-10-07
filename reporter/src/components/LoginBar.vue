<template>
  <div class="login-bar" :class="{loggedIn: loggedIn}">
    <input placeholder="Username" type="username" />
    <input placeholder="password" type="password" />
    <button>
      <img @click="login()" id="login" src='../assets/icons/enter.svg' />
    </button>
  </div>
  
</template>

<script>
export default {
  name: 'LoginBar',
  data() {
    return {
      loggedIn: false
    }
  },
  methods: {
    validate() {

    },
    login() {
      this.loggedIn = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div.login-bar {
    position: absolute;
    left: 0;
    width: 400px;
    height: 100vh;
    box-shadow: 6px 0 7px -8px grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 1s;
  }
  input {
    width: 70%;
    height: 30px;
    margin: 10px;
    border: 0;
    border-bottom: 1px solid grey;
  }

  button {
    border: 0;
  }

  .loggedIn {
    left: -600px !important;
  }

  input[type="username"], input[type="password"] {
    font-size: 18px;
    padding: 0 0 5px 0;
  }

  #login {
    margin-top: 30px;
    width: 50px;
  }
</style>
