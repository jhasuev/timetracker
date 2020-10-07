<template>
  <div>
    <sidebar-info class="info" />
    <projects class="projects" />
  </div>
</template>

<script>
import SidebarInfo from '@/components/sidebar/info.vue'
import Projects from '@/components/sidebar/projects.vue'
export default {
  name: 'Sidebar',
  components: {
    SidebarInfo,
    Projects,
  },
}
</script>

<style lang="scss" scoped>

.info {
  z-index: 2;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #eee;
}

.projects {
  position: relative;
  z-index: 1;
}


</style>