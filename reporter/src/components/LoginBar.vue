<template>
  <div class="login-bar">
    <input type="username" />
    <input type="password" />
    <button>
      <img id="login" src='../assets/icons/enter.svg' />
    </button>
  </div>
</template>

<script>
export default {
  name: 'LoginBar',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div.login-bar {
    width: 500px;
    height: 100vh;
    box-shadow: 6px 0 7px -8px grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  input {
    width: 300px;
    height: 30px;
    margin: 10px;
    border: 0;
    border-bottom: 1px solid grey;
  }

  #login {
    margin-top: 30px;
    width: 50px;
    font-size: 16px;
    text-align: center;
  }
</style>
