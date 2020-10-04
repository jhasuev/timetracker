<template>
  <div class="header">
    <h2 class="header__title  display-1">Название проекта</h2>
    <div class="header__desc  md-caption">{{'Описание проекта'.repeat(20)}}</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
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