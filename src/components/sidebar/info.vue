<template>
  <div class="info">
    <div class="info__actions">
      <md-button class="md-icon-button md-raised md-primary">
        <md-icon>play_arrow</md-icon>
        <md-tooltip md-direction="top">Start timer</md-tooltip>
      </md-button>
      <div class="info__actions-time">
        00:02:27
      </div>
      <md-button class="md-icon-button md-raised">
        <md-icon>edit</md-icon>
        <md-tooltip md-direction="top">Edit this project</md-tooltip>
      </md-button>
    </div>
    <div class="info__task">
      <div class="md-headline">Project name</div>
      <div class="md-subheading">Task name</div>
    </div>
    <div class="info__total  md-caption">
      Total today: 02:27
    </div>
    <div class="text-center">
      <md-button @click="project_create_popup = true">
        Create new project
      </md-button>
    </div>

    <project-create-edit-popup v-model="project_create_popup" />
  </div>
</template>

<script>
import ProjectCreateEditPopup from '@/components/popups/project-create-edit-popup'
export default {
  name: 'SidebarInfo',
  components: {
    ProjectCreateEditPopup,
  },
  data(){
    return {
      project_create_popup: false,
      data: {
        project_name: '',
        project_desc: '',
        payment: '',
      },
    }
  },
  methods: {
    onCreateProject(){
      // this.$root
    }
  },
}
</script>

<style lang="scss" scoped>

.info {
  padding: 20px;
  background-color: #fff;

  &__actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 -6px;

    &-time {
      min-width: 100px;
      padding: 5px 15px 3px;
      text-align: center;
      border-radius: 4px;
      background-color: #111;
      color: #fff;
    }
  }
  &__task {
    margin-top: 10px;
    text-align: center;
  }
  &__total {
    margin-top: 15px;
    text-align: center;
  }
}

</style>