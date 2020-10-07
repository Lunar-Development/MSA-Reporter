<template>
  <div class="header-bar">
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
    height: 40px;
  }
</style>
