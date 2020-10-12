<template>
  <div class="login-bar" :class="{loggedIn: loggedIn}">
    <input placeholder="Username" type="username" v-model="username"/>
    <input placeholder="password" type="password" v-model="password"/>
    <button>
      <img @click="login()" id="login" src='../assets/icons/enter.svg' />
    </button>
  </div>
</template>

<script>
import Firebase from '../database/Firebase'

export default {
  name: 'LoginBar',
  data() {
    return {
      loggedIn: false,
      authStatus: 'No Auth Status',
      firebaseConnection: '',
      username: '',
      password: '',
    }
  },
  methods: {
    async login() {
      this.firebaseConnection = new Firebase();
      this.loginStatus = await this.firebaseConnection.signIn(this.username, this.password);
      if (this.firebaseConnection.authStatus === 'Authorized') {
        this.authStatus = 'Authorized';
        this.loggedIn = true;
      }
    }
  }
}
</script>

<style scoped>
  div.login-bar {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    box-shadow: 6px 8px 7px -8px grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: top 1s;
    background-color: white;
  }
  input {
    width: 40%;
    height: 30px;
    margin: 10px;
    border: 0;
    border-bottom: 1px solid grey;
  }

  button {
    border: 0;
  }

  .loggedIn {
    top: -1000px !important;
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
