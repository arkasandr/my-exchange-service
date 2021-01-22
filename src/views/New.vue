<template>
  <form class="card">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description"></textarea>
    </div>

    <button class="btn primary"
            :disabled="disableNewTask"
            @click="add"
    >
      Создать</button>
  </form>
</template>

<script>

import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import moment from 'moment'

export default {
  setup () {
    const router = useRouter()
    const idx = ref('')
    const title = ref('')
    const date = ref('')
    const description = ref('')
    const store = useStore()

    async function addNewTask () {
      const task = {
        idx: Date.now(),
        title: title.value,
        date: date.value,
        description: description.value,
        status: moment(date.value).endOf('day').isAfter() ? 'active' : 'cancelled'
      }
      await store.dispatch('addNewTask', task)
      await router.push('/')
    }

    const disableNewTask = computed(() => {
      return title.value.length === 0 || date.value.length === 0 || description.value.length === 0
    })

    return {
      idx,
      title,
      date,
      description,
      disableNewTask,
      add: addNewTask
    }
  }
}
</script>
