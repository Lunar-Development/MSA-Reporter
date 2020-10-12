<template>
  <div id="action-dashboard">
    <HeaderBar />
    <div class="split">
      <NewSubject />
      <NewSession />
    </div>

  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar.vue';
import NewSubject from '../components/NewSubject.vue';
import NewSession from '../components/NewSession.vue';

export default {
  name: 'ActionDashboard',
  components: {
    HeaderBar,
    NewSubject,
    NewSession
  }
}
</script>

<style scoped>
  .split {
    width: 100%;
    height: calc(100vh - 200px);
    display: flex;
  }

  .split > div {
    background-color: white;
  }

  .split > div:nth-child(1) {
    position: absolute;
    left: 0;
    width: 500px;
  }
</style>
