import { createRouter, createWebHistory } from 'vue-router'
import BlogView from '../views/BlogView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },{
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
   
  ]
})

export default router
