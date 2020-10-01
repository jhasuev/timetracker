<template>
  <div class="main-view-wrapper">
    <div class="main-view">
      <md-content class="main-view__sidebar  md-scrollbar">
        <Sidebar />
      </md-content>
      <div class="main-view__content">
        <MainContent />
      </div>
    </div>
  </div>
</template>

<script>

import Sidebar from '@/components/sidebar.vue'
import MainContent from '@/components/main.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    MainContent,
  },
}

</script>

<style lang="scss" scoped>

.main-view-wrapper {
  display: flex;
  align-items: center;
  padding: 15px;
  height: 100vh;
}

.main-view {
  display: flex;

  width: 999px;
  min-width: 999px;
  height: 630px;

  margin: auto;
  box-shadow: 0 0 10px rgba(0,0,0,.5);

  background-color: #fff;

  &__sidebar {
    min-width: 290px;
    max-width: 290px;
  }
  &__content {
    flex-grow: 1;
    padding: 15px;
  }
}
  

</style>