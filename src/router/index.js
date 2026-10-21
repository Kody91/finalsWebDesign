import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import FacultyView from '@/views/FacultyView.vue'
import BLIS from '@/views/BLIS.vue'
import BSIT from '@/views/BSIT.vue'
import BSDMIA from '@/views/BSDMIA.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/faculty', name: 'Faculty', component: FacultyView },
    { path: '/blis', name: 'BLIS', component: BLIS },
    { path: '/bsit', name: 'BSIT', component: BSIT },
    { path: '/bsdmia', name: 'BSDMIA', component: BSDMIA },
  ],
})

export default router
