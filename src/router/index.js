import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/layout/index.vue'
import Login from '@/views/Login/index.vue'
import Home from "@/views/Home/index.vue"
import Category from "@/views/Category/index.vue"
import Detail from '@/views/Detail/index.vue'
import Register from '@/views/register/index.vue'
import CartList from '@/views/CartList/index.vue'

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
        },
        {
          path: 'detail/:id',
          component: Detail
        },
        {
          path: 'cartlist',
          component: CartList
        }
      ]
    },
    {
      path: '/login',
      name: 'about',
      component: Login
    },{
      path: '/register',
      component: Register
    },
  ],
  scrollBehavior(){
    return{
      top:0
    }
  }
})

export default router
