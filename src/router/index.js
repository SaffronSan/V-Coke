import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'About',
      component: () => import('../views/About.vue'),
    },
    {
      path: '/timeline',
      name: 'Timeline',
      component: () => import('../views/Timeline.vue'),
    },
  ],
})

export default router
