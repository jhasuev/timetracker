<template>
  <div class="sidebar">
    <!-- starts -->

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
    </div>

    <md-dialog :md-active.sync="project_create_popup">
      <md-dialog-title>Create new project</md-dialog-title>

      <md-dialog-content>
        <md-field>
          <label>Project name</label>
          <md-input v-model="project_name" maxlength="100"></md-input>
        </md-field>
        <md-field>
          <label>Description (optional)</label>
          <md-textarea v-model="project_desc" md-autogrow maxlength="256"></md-textarea>
        </md-field>
        <md-field :md-counter="false">
          <label>Payment</label>
          <span class="md-prefix">₽</span>
          <md-input v-model="payment" maxlength="10"></md-input>
        </md-field>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click="project_create_popup = false">Close</md-button>
        <md-button class="md-primary" @click="project_create_popup = false">Create</md-button>
      </md-dialog-actions>
    </md-dialog>

    <div class="tasks">
      <div
        v-for="n in 20"
        :key="n"
        class="tasks__item"
      >
        <div class="tasks__action">
          <md-button class="md-icon-button md-dense md-raised md-primary">
            <md-icon>play_arrow</md-icon>
            <md-tooltip md-direction="top">Start timer</md-tooltip>
          </md-button>
        </div>
        <div class="tasks__title">
          Task Title Task Title Task Title Task Title
        </div>
        <div class="tasks__time  md-caption">02:27</div>
      </div>
    </div>

    <!-- ends -->
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data(){
    return {
      project_create_popup: false,
    }
  },
}
</script>

<style lang="scss" scoped>

.sidebar {
  padding: 20px;
}

.info {
  z-index: 2;
  position: sticky;
  top: 0;
  margin: 0 -20px;
  padding: 20px;
  background-color: #fff;
  border-bottom: 1px solid #eee;

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

.tasks {
  position: relative;
  z-index: 1;
  &__item {
    display: flex;
    align-items: center;
    padding: 7px 0;
    border-bottom: 1px solid #eee;

    &:last-child {
      border-bottom: none;
    }
  }
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