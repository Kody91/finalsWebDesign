import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import FacultyView from '@/views/FacultyView.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return savedPosition || { top: 0 }
  },
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/faculty', name: 'Faculty', component: FacultyView },
  ],
})

export default router
