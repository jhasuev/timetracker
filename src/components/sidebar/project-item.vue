<template>
  <md-list-item
    @click="onProjectClick(project.id)"
    :class="[
      'project',
      {
        'project--selected': getSelectedProjectID === project.id,
      }
    ]"
  >
    <div class="project__title">{{ project.title }}</div>
    <div class="md-caption">02:27</div>
  </md-list-item>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'Project',
  props: {
    project: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    ...mapGetters([
      'getSelectedProjectID',
    ]),
  },
  methods: {
    ...mapMutations([
      'setSelectedProject',
    ]),
    onProjectClick(proj_id){
      this.setSelectedProject(proj_id)
    },
  },
}
</script>

<style lang="scss" scoped>

.project {
  display: flex;
  align-items: center;

  &--selected {
    background-color: #eee;
  }

  &__title {
    flex-grow: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding-right: 10px;
  }
}
</style>
