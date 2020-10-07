<template>
  <div class="header">
    <h2
      v-if="getSelectedProject.title"
      class="header__title  display-1"
    >{{ getSelectedProject.title }}</h2>
    <div
      v-if="getSelectedProject.description"
      class="header__desc  md-caption"
    >{{ getSelectedProject.description }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Header',
  computed: {
    ...mapGetters([
      'getSelectedProject',
    ])
  },
}
</script>

<style lang="scss" scoped>

.header {
  &__title {
    margin: 0;
  }
  &__desc {
    margin-top: 10px;
  }
}

</style>