import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Blog from '@/components/Users/blog.vue'
import Product from '@/components/Commande/product.vue'
import Service from '@/components/Commande/service.vue'
import SignUp from '@/components/Users/sign-up.vue'
import Panier from '@/components/Commande/panier.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/produit',
      name: 'produit',
      component: Product
    },
    {
      path: '/service',
      name: 'service',
      component: Service
    },
    {
      path: '/panier',
      name: 'panier',
      component: Panier
    },
    {
      path: '/Register',
      name: 'register',
      component: SignUp
    }

  ]
})

export default router
