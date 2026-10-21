import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import FacultyView from '@/views/FacultyView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/faculty', name: 'Faculty', component: FacultyView },
  ],
})

export default router
