import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    tasks: []
  },

  getters: {
    tasks (state) {
      return state.tasks
    }
  },

  mutations: {
    tasks (state, tasks) {
      state.tasks = tasks
    },
    addNewTask (state, task) {
      state.tasks.push(task)
    }
  },

  actions: {
    async getAllTasks (context) {
      try {
        const response = await axios.get(`${process.env.VUE_APP_ENV_DB_TASKS}/tasks.json`)
        if (!response.data) {
          throw new Error('Задачи отсутствуют')
        }
        context.commit('tasks', Object.values(response.data))
        console.log('tasks', Object.values(response.data))
      } catch (e) {
        console.log('error')
      }
    },

    async addNewTask (context, task) {
      console.log('task add', task)
      try {
        await fetch(`${process.env.VUE_APP_ENV_DB_TASKS}/tasks.json`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(task)
        })
        context.commit('addNewTask', task)
        console.log('success adding')
      } catch (e) {
        console.log('error add')
      }
    }

  },
  modules: {}
})
