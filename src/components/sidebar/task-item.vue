<template>
  <div class="task">
    <div class="task__action">
      <md-button class="md-icon-button md-dense md-raised md-primary">
        <md-icon>play_arrow</md-icon>
        <md-tooltip md-direction="top">Start timer</md-tooltip>
      </md-button>
    </div>
    <div class="task__title">
      Task Title Task Title Task Title Task Title
    </div>
    <div class="task__time  md-caption">02:27</div>
  </div>
</template>

<script>
export default {
  name: 'SidebarTasks',
}
</script>

<style lang="scss" scoped>

.task {
  display: flex;
  align-items: center;
  padding: 7px 0;
  &__action {
    margin-left: -6px;
  }
  &__title {
    padding: 0 5px;
    flex-grow: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  &__time {
    margin-left: auto;
  }
}


</style>