<template>
  <div class="content">
    <div class="content__head">
      <h2 class="content__head-title  display-1">Название проекта</h2>
      <div class="content__head-desc  md-caption">{{'Описание проекта'.repeat(20)}}</div>
    </div>
    <md-content class="content__middle md-scrollbar">
      <tasks class="content__middle-tasks" />
    </md-content>
    <div class="content__info">
      <table class="content__info-table  table">
        <tr>
          <td>Проект в работе</td>
          <td>00:02:27</td>
        </tr>
        <tr>
          <td>На сумму</td>
          <td>666 ₽</td>
        </tr>
        <tr>
          <td>Оплачено (всего/оплачено/осталось)</td>
          <td>
            <span class="color-gray">333 ₽</span> /
            <span class="color-green">+333 ₽</span> /
            <span class="color-red">333 ₽</span>
          </td>
        </tr>
        <tr>
          <td>Действия</td>
          <td>
            <md-button class="md-icon-button md-dense md-raised">
              <md-icon>attach_money</md-icon>
              <md-tooltip md-direction="top">Add payment</md-tooltip>
            </md-button>
            <md-button class="md-icon-button md-dense md-raised md-accent">
              <md-icon>clear</md-icon>
              <md-tooltip md-direction="top">Remove the task</md-tooltip>
            </md-button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Tasks from './tasks.vue'
export default {
  name: 'MainContent',
  components: {
    Tasks,
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
    &-title {
      margin: 0;
    }
    &-desc {
      margin-top: 10px;
    }
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

    &-table {
      // max-width: 50%;
      // max-width: 50%;
    }
  }
}

.play-btn {
  width: 70px;
}

</style>