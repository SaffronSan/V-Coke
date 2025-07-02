import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'About',
      component: About,
    },
    {
      path: '/timeline',
      name: 'Timeline',
      component: () => import('../views/Timeline.vue'),
    },
  ],
})

export default router
