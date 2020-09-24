<template>
  <div class="sidebar  md-layout-item  md-layout  md-gutter">
    <div class="md-layout-item md-size-100">
      <!-- starts -->

      <div class="info">
        <div class="info__actions">
          <md-button class="md-icon-button md-raised md-primary">
            <md-icon class="md-size-2x">arrow_right</md-icon>
          </md-button>
          <div class="info__actions-time">
            00:02:27
          </div>
          <md-button class="md-icon-button md-raised">
            <md-icon>edit</md-icon>
          </md-button>
        </div>
        <div class="info__task">
          <div class="md-headline">Project name</div>
          <div class="md-subheading">Task name</div>
        </div>
        <div class="info__total  md-caption">
          Total today: 02:27
        </div>
      </div>

      <div class="tasks">
        <div
          v-for="n in 20"
          :key="n"
          class="tasks__item"
        >
          <div class="tasks__action">
            <md-button class="md-icon-button md-dense md-raised md-primary">
              <md-icon>arrow_right</md-icon>
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
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>

<style scoped>

.sidebar {
  padding-top: 20px;
  padding-bottom: 20px;
}

.info {
  padding-bottom: 10px;
  border-bottom: 1px solid #f0f0f0;
}
.info__actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 -6px;
}
.info__actions-time {
  min-width: 100px;
  padding: 5px 15px 3px;
  text-align: center;
  border-radius: 4px;
  background-color: #111;
  color: #fff;
}
.info__task {
  margin-top: 10px;
  text-align: center;
}
.info__total {
  margin-top: 15px;
  text-align: center;
}


.tasks {}
.tasks__item {
  display: flex;
  align-items: center;
  padding: 7px 0;
  border-bottom: 1px solid #eee;
}
.tasks__item:last-child {
  border-bottom: none;
}
.tasks__action {
  margin-left: -6px;
}
.tasks__title {
  padding: 0 5px;
  flex-grow: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.tasks__time {
  margin-left: auto;
}


</style>