<template>
  <div class="tasks">
    <task-item
      v-for="n in 20"
      :key="n"
      class="tasks__item"
    />
  </div>
</template>

<script>
import TaskItem from './task-item'
export default {
  name: 'SidebarTasks',
  components: {
    TaskItem,
  },
}
</script>

<style lang="scss" scoped>

.tasks {
  &__item {
    border-bottom: 1px solid #eee;
    &:last-child {
      border-bottom: none;
    }
  }
}


</style>