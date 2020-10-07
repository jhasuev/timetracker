<template>
  <div class="info">
    <div class="info__actions">
      <div>
        <md-button
          class="md-icon-button md-raised md-primary"
          :disabled="!getSelectedProject"
        >
          <md-icon>play_arrow</md-icon>
        </md-button>
        <md-tooltip v-if="getSelectedProject" md-direction="bottom">Start timer</md-tooltip>
      </div>

      <div class="info__actions-time">
        00:02:27
      </div>

      <div>
        <md-button
          class="md-icon-button md-raised"
          @click="project_create_popup = true"
        >
          <md-icon>add</md-icon>
        </md-button>
        <md-tooltip md-direction="bottom">Edit this project</md-tooltip>
      </div>
    </div>
    <div class="info__task">
      <div
        v-if="getSelectedProject"
        class="md-headline"
      >{{ getSelectedProject.title }}</div>

      <div class="md-subheading">Task name</div>
    </div>
    <div class="info__total  md-caption">
      Total today: 02:27
    </div>

    <project-create-edit-popup v-model="project_create_popup" />
  </div>
</template>

<script>
import ProjectCreateEditPopup from '@/components/popups/project-create-edit-popup'
import { mapGetters } from 'vuex'
export default {
  name: 'SidebarInfo',
  components: {
    ProjectCreateEditPopup,
  },
  computed: {
    ...mapGetters([
      'getSelectedProject',
    ]),
  },
  data(){
    return {
      project_create_popup: false,
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