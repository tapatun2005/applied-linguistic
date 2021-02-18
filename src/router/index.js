import { createRouter, createWebHistory } from 'vue-router'

import Home from '../Views/Home.vue'
import One from '../Views/One.vue'
import Two from '../Views/Two.vue'
import Three from '../Views/Three.vue'
import Four from '../Views/Four.vue'

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/one',
        component: One
      },
      {
        path: '/two',
        component: Two
      },
      {
        path: '/three',
        component: Three
      },
      {
        path: '/four',
        component: Four
      }
    ]
})

export default router