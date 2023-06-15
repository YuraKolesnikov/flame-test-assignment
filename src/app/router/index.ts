import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/pages/home.vue'

const router = createRouter({
  linkActiveClass: 'text-purple-400',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/peoples',
      name: 'peoples',
      component: () => import('@/pages/peoples.vue')
    },
    {
      path: '/peoples/:id',
      name: 'person',
      component: () => import('@/pages/person.vue')
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('@/pages/favorites.vue')
    }
  ]
})

export default router
