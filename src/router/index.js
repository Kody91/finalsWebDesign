import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import FacultyView from '@/views/FacultyView.vue'
import BLIS from '@/views/BLIS.vue'
import BSIT from '@/views/BSIT.vue'
import BSDMIA from '@/views/BSDMIA.vue'
import BSCS from '@/views/BSCS.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/faculty', name: 'Faculty', component: FacultyView },
    { path: '/blis', name: 'BLIS', component: BLIS },
    { path: '/bsit', name: 'BSIT', component: BSIT },
    { path: '/bsdmia', name: 'BSDMIA', component: BSDMIA },
    { path: '/bscs', name: 'BSCS', component: BSCS },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

export default router
