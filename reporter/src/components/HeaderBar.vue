<template>
  <div class="header-bar">
    <img @click="logout()" id="logout" src='../assets/icons/logout.svg' />
  </div>
</template>

<script>
import Firebase from '../database/firebase'
export default {
  name: 'HeaderBar',
  data() {
    return {
      loginStatus: ''
    }
  },
  methods: {
    async logout() {
      this.firebaseConnection = new Firebase();
      this.loginStatus = await this.firebaseConnection.signOut();
      if (this.firebaseConnection.authStatus === 'Unauthorized') {
        window.location.href = '/'
      }
    }
  }
}
</script>

<style scoped>
  .header-bar {
    position: fixed;
    z-index: 99;
    top: 0;
    width: 100vw;
    height: 80px;
    background-color: rgba(66, 118, 139, 1);
    display: flex;
    padding: 0 30px 0 30px;
    align-items: center;
  }

  #logout {
    cursor: pointer;
    height: 40px;
  }
</style>
