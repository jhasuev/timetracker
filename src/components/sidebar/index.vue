<template>
  <div class="sidebar">
    <sidebar-info class="info" />
    <tasks class="tasks" />
  </div>
</template>

<script>
import SidebarInfo from '@/components/sidebar/info.vue'
import Tasks from '@/components/sidebar/tasks.vue'
export default {
  name: 'Sidebar',
  components: {
    SidebarInfo,
    Tasks,
  },
}
</script>

<style lang="scss" scoped>

.sidebar {
  padding: 20px;
}

.info {
  z-index: 2;
  position: sticky;
  top: 0;
  margin: 0 -20px;
  border-bottom: 1px solid #eee;
}

.tasks {
  position: relative;
  z-index: 1;
}


</style>