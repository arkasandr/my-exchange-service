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
    }
  },
  modules: {
  }
})
