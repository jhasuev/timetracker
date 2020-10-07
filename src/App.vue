<template>
  <div class="main-view-wrapper">
    <div class="main-view">
      <md-content class="main-view__sidebar  md-scrollbar">
        <Sidebar />
      </md-content>
      <div class="main-view__content">
        <template v-if="getSelectedProjectID">
          <MainContent />
        </template>
        <template v-else>
          <md-empty-state
            class="main-view__content-empty"
            md-icon="push_pin"
            md-label="No selected project"
          >
          </md-empty-state>
        </template>
      </div>
    </div>
  </div>
</template>

<script>

import Sidebar from '@/components/sidebar/index'
import MainContent from '@/components/content/index'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    Sidebar,
    MainContent,
  },
  computed: {
    ...mapGetters([
      'getSelectedProjectID',
    ]),
  },
}

</script>

<style lang="scss" scoped>

.main-view-wrapper {
  display: flex;
  align-items: center;
  padding: 15px;
  height: 100vh;
}

.main-view {
  display: flex;

  width: 999px;
  min-width: 999px;
  height: 630px;

  margin: auto;
  box-shadow: 0 0 10px rgba(0,0,0,.5);

  background-color: #fff;

  &__sidebar {
    min-width: 290px;
    max-width: 290px;
    border-right: 1px solid #eee;
  }
  &__content {
    position: relative;

    flex-grow: 1;
    padding: 15px;
    overflow: hidden;

    &-empty {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
  

</style>