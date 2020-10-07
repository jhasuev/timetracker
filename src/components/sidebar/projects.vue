<template>
  <div class="projects">
    <projects-item
      v-for="(project, i) in getProjects"
      :key="i"
      :project="project"
      class="projects__item"
    />
  </div>
</template>

<script>
import ProjectsItem from './project-item'
import { mapGetters } from 'vuex'
export default {
  name: 'Projects',
  components: {
    ProjectsItem,
  },
  computed: {
    ...mapGetters([
      'getProjects',
    ])
  },
}
</script>

<style lang="scss" scoped>

.projects {
  &__item {
    border-bottom: 1px solid #eee;
    &:last-child {
      border-bottom: none;
    }
  }
}


</style>