<template>
  <h1 class="text-white center" v-if=!tasks.length>Задач пока нет</h1>
  <template v-else>
    <h3 class="text-white">Всего активных задач: {{ sumActive }}</h3>
    <div class="card" v-for="item in tasks" :key="item.idx">
      <h2 class="card-title">
        {{ item.title }}
        <AppStatus :type="item.status"/>
      </h2>
      <p>
        <strong>
          <small>
            {{item.date}}
          </small>
        </strong>
      </p>
      <button class="btn primary" @click="$router.push('/task/'+ item.idx)">Посмотреть</button>
    </div>
  </template>
</template>

<script>
import AppStatus from '../components/AppStatus'
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {

  setup () {
    const store = useStore()
    const tasks = computed(() => store.getters.tasks)
    const sumActive = computed(() => store.getters.tasks.filter(e => e.status === 'active').length)

    return {
      tasks,
      sumActive
    }
  },
  components: { AppStatus }
}
</script>
