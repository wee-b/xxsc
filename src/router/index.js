import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/layout/index.vue'
import Login from '@/views/Login/index.vue'
import Home from "@/views/Home/index.vue"
import Category from "@/views/Category/index.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children:[
        {
          path: '',
          component: Home
        },
        {
          path: 'category/:id',
          component: Category
        }
      ]
    },
    {
      path: '/login',
      name: 'about',
      component: Login
    },
  ],
  scrollBehavior(){
    return{
      top:0
    }
  }
})

export default router
