<template>
  <div class="content">
    <div class="content__head">
      <h2 class="content__head-title  display-1">Название проекта</h2>
    </div>
    <md-content class="content__middle md-scrollbar">
      <md-table class="content__middle-table">
        <md-table-row>
          <md-table-head class="play-btn"></md-table-head>
          <md-table-head>Task title</md-table-head>
          <md-table-head>Time total</md-table-head>
        </md-table-row>

        <md-table-row
          v-for="n in 100"
          :key="n"
        >
          <md-table-cell class="play-btn  clear-paddings">
            <md-button class="btn md-icon-button md-dense md-raised md-primary">
              <md-icon>arrow_right</md-icon>
            </md-button>
          </md-table-cell>
          <md-table-cell>Shawna Dubbin</md-table-cell>
          <md-table-cell>00:02:27</md-table-cell>
        </md-table-row>
      </md-table>
    </md-content>
    <div class="content__info">
      Информация по проекту
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainContent',
}
</script>

<style lang="scss" scoped>

.content {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  &__head {
    border-bottom: 1px solid #ddd;
    &-title {}
  }
  
  &__middle {
    flex-grow: 1;
    &-table {}
  }

  &__info {
    padding: 10px;
    border-top: 1px solid #ddd;
  }
}

.play-btn {
  width: 70px;
}

</style>