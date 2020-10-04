<template>
  <div class="content">
    <custom-header class="content__head" />
    <md-content class="content__middle md-scrollbar">
      <tasks class="content__middle-tasks" />
    </md-content>
    <project-info class="content__info" />
  </div>
</template>

<script>
import Tasks from './tasks.vue'
import ProjectInfo from './project-info.vue'
import CustomHeader from './header.vue'
export default {
  name: 'MainContent',
  components: {
    Tasks,
    ProjectInfo,
    CustomHeader,
  },
}
</script>

<style lang="scss" scoped>

.content {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  &__head {
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
  }
  
  &__middle {
    flex-grow: 1;

    &-tasks {
      height: 100%;
    }
  }

  &__info {
    padding-top: 15px;
    border-top: 1px solid #ddd;
  }
}

</style>