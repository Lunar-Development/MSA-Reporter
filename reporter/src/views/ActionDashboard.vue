<template>
  <div id="action-dashboard">
    <HeaderBar />
    <NewSubject />
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar.vue';
import NewSubject from '../components/NewSubject.vue';

export default {
  name: 'ActionDashboard',
  components: {
    HeaderBar,
    NewSubject
  }
}
</script>

<style scoped>
  
</style>
