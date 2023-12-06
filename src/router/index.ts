import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/privacy',
      name: 'privacy',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/privacy/PrivacyPolicy.vue')
    },
    {
      path: '/additional',
      name: 'additional',
      component: () => import('@/views/additional-info/AdditionalInfo.vue')
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('@/views/team-info/TeamInfo.vue')
    }
  ]
})

export default router
