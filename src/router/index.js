import { createRouter, createWebHashHistory } from 'vue-router'
import Tasks from '../views/Tasks'
import Task from '../views/Task'
import New from '../views/New'

const routes = [
  {
    path: '/',
    component: Tasks
  },
  {
    path: '/new',
    component: New
  },
  {
    path: '/task',
    component: Task
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
