<template>
  <div class="header-bar">
    <img @click="logout()" id="logout" src='../assets/icons/logout.png' />
  </div>
</template>

<script>
export default {
  name: 'HeaderBar'
}
</script>

<style scoped>
  .header-bar {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 80px;
    background-color: #2A9D8F;
    display: flex;
    padding: 0 30px 0 30px;
    align-items: center;
  }

  #logout {
    height: 40px;
  }
</style>
