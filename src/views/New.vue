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
            @click="saveNewTask"
    >
      Создать</button>
  </form>
</template>

<script>

import { ref, computed } from 'vue'

export default {
  props: ['tasks'],
  // emits:['save-task'],
  setup () {
    const idx = ref('')
    const title = ref('')
    const date = ref('')
    const description = ref('')

    async function saveTask () {
      try {
        await fetch(process.env.VUE_APP_ENV_DB_TASKS + '/tasks.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            idx: Date.now(),
            title: title.value,
            date: date.value,
            description: description.value
          })
        })
        title.value = ''
        date.value = ''
        description.value = ''
        // this.resume.push({ type: type, content: content })
      } catch (e) {
        console.log(e, 'error')
        // this.alert = {
        //   type: 'danger',
        //   title: 'Ошибка!',
        //   text: e.message
        // }
      }
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
      saveNewTask: saveTask
    }
  }
}
</script>
