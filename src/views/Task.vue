<template>
  <div class="card" v-if="current">
    <h2>{{ current.title }}</h2>
    <p><strong>Статус</strong>:
      <AppStatus :type="current.status"/>
    </p>
    <p><strong>Дэдлайн</strong>: {{ current.date }}</p>
    <p><strong>Описание</strong>: {{ current.description }}</p>

    <div>
      <button
        class="btn"
        :disabled="current.status === 'pending'"
        @click="updateTaskStatus('pending')"
      >
        {{ current.status === 'cancelled' ? 'Сделать активной': 'Взять в работу'}}
      </button>
      <button
        class="btn primary"
        :disabled="current.status === 'done' || current.status === 'cancelled'"
        @click="updateTaskStatus('done')"
      >
        Завершить
      </button>
      <button
        class="btn danger"
        :disabled="current.status === 'cancelled'"
        @click="updateTaskStatus('cancelled')"
      >
        Отменить
      </button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ taskId }}</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup () {
    const store = useStore()
    const router = useRouter()
    const taskId = ref(router.currentRoute.value.params.index)
    const tasks = computed(() => store.getters.tasks)
    const current = computed(() => store.getters.tasks.find(e => e.idx === parseInt(taskId.value)))

    async function updateTaskStatus (type) {
      if (current.value.status === 'cancelled' && type === 'pending') {
        type = 'active'
        await store.dispatch('updateTaskStatus', { taskId, type })
      }
      await store.dispatch('updateTaskStatus', { taskId, type })
    }

    return {
      taskId,
      current,
      tasks,
      updateTaskStatus
    }
  },
  components: { AppStatus }
}
</script>

<style scoped>

</style>
