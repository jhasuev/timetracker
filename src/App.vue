<template>
  <div class="page-container">
    <div class="md-elevation-10">
      <md-app>

        <md-app-drawer md-permanent="full">
          <Sidebar />
        </md-app-drawer>

        <md-app-content>
          <MainContent />
        </md-app-content>

      </md-app>
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

<style scoped>
.page-container {
  max-width: 999px;
  padding: 50px 15px;
  margin: auto;
}
.md-app {
  height: 630px;
  border: 1px solid rgba(#000, .12);
}
.md-drawer {
  width: 290px;
  max-width: calc(100vw - 125px);
}
</style>