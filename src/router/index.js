import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
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
