import { createRouter, createWebHistory } from 'vue-router'

import Home from '../Views/Home.vue'
import Pages from '../Views/Pages.vue'
import Page from '../Views/Page.vue'
import Tasks from '../Views/Tasks.vue'
import Task from '../Views/Task.vue'
import Contacts from '../Views/Contacts.vue'

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/pages',
        component: Pages
      },
      {
        path: '/pages/:name',
        component: Page
      },
      {
        path: '/tasks',
        component: Tasks
      },
      {
        path: '/tasks/:name',
        component: Task
      },
      {
        path: '/contacts',
        component: Contacts
      }
    ]
})

export default router