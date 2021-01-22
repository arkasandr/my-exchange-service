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
    },
    updateTaskStatus (state, { taskId, type }) {
      const task = state.tasks.filter(t => t.idx === parseInt(taskId.value))
      task[0].status = type
    },
    deleteTask (state, index) {
      const id = state.tasks.findIndex(t => t.idx === index)
      if (id > -1) {
        state.tasks.splice(id, 1)
      }
    }
  },

  actions: {
    async getAllTasks (context) {
      const response = (await axios.get(`${process.env.VUE_APP_ENV_DB_TASKS}/tasks.json`))
      if (response.data) {
        context.commit('tasks', Object.values(response.data))
        console.log('success get', Object.values(response.data))
      }
    },

    async addNewTask (context, task) {
      await axios.put(`${process.env.VUE_APP_ENV_DB_TASKS}/tasks/${task.idx}.json`, task)
      context.commit('addNewTask', task)
      console.log('success adding')
    },

    async updateTaskStatus (context, { type, taskId }) {
      context.commit('updateTaskStatus', { type, taskId })
      const task = context.state.tasks.filter(t => t.idx === parseInt(taskId.value))
      await axios.patch(`${process.env.VUE_APP_ENV_DB_TASKS}/tasks/${taskId.value}.json`, task[0])
    },

    async deleteTask (context, index) {
      context.commit('deleteTask', index)
      await axios.delete(`${process.env.VUE_APP_ENV_DB_TASKS}/tasks/${index}.json`)
    }

  },
  modules: {}
})
