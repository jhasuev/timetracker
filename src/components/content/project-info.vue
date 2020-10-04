<template>
  <div>
    <table class="table">
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
            <md-icon>delete</md-icon>
            <md-tooltip md-direction="top">Remove the task</md-tooltip>
          </md-button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ProjectInfo',
}
</script>