<template>
  <div>
    <md-table md-card>
      <md-table-row slot="md-table-row">
        <md-table-head>Время</md-table-head>
        <md-table-head>Сумма</md-table-head>
        <md-table-head>Действия</md-table-head>
      </md-table-row>
      <md-table-row slot="md-table-row">
        <md-table-cell>00:02:27</md-table-cell>
        <md-table-cell>
          <span>
            <span class="color-gray">333 ₽</span>
            <md-tooltip md-direction="top">Всего отработано</md-tooltip>
          </span>
          /
          <span>
            <span class="color-green">+333 ₽</span>
            <md-tooltip md-direction="top">Получена оплата</md-tooltip>
          </span>
          /
          <span>
            <span class="color-red">333 ₽</span>
            <md-tooltip md-direction="top">Осталось оплатить</md-tooltip>
          </span>
        </md-table-cell>
        <md-table-cell>
          <md-button class="md-icon-button md-dense md-raised">
            <md-icon>edit</md-icon>
            <md-tooltip md-direction="top">Edit this project</md-tooltip>
          </md-button>
          <md-button class="md-icon-button md-dense md-raised">
            <md-icon>attach_money</md-icon>
            <md-tooltip md-direction="top">Add payment</md-tooltip>
          </md-button>
          <md-button class="md-icon-button md-dense md-raised md-accent">
            <md-icon>delete</md-icon>
            <md-tooltip md-direction="top">Remove the task</md-tooltip>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  // rename to Footer
  name: 'ProjectInfo',
}
</script>