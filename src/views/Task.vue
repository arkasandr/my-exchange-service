<template>
  <div class="card" v-if="current">
    <h2>{{ current.title }}</h2>
    <p><strong>Статус</strong>:
      <AppStatus :type="current.status"/>
    </p>
    <p><strong>Дэдлайн</strong>: {{ current.date }}</p>
    <p><strong>Описание</strong>: {{ current.description }}</p>
    <div>
      <button class="btn">Взять в работу</button>
      <button class="btn primary">Завершить</button>
      <button class="btn danger">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ taskId }}</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'
import { useStore } from 'vuex'
import { computed, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup () {
    const store = useStore()
    const router = useRouter()
    const taskId = ref(router.currentRoute.value.params.index)
    const tasks = computed(() => store.getters.tasks)
    const current = computed(() => store.getters.tasks.find(e => e.idx === parseInt(taskId.value)))

    onMounted(async () => {
      await console.log('tasks from store', tasks.value, 'taskId.value', taskId, 'current', current.value)
    })

    return {
      taskId,
      current,
      tasks
    }
  },
  components: { AppStatus }
}
</script>

<style scoped>

</style>
