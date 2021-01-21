<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="'done'" /></p>
    <p><strong>Дэдлайн</strong>: {{ date }}</p>
    <p><strong>Описание</strong>: {{ description }}</p>
    <div>
      <button class="btn">Взять в работу</button>
      <button class="btn primary">Завершить</button>
      <button class="btn danger">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center">
    Задачи с id = <strong>{{ idx }}</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'

export default {
  props: ['idx', 'title', 'date', 'description'],
  components: { AppStatus }
}
</script>

<style scoped>

</style>
