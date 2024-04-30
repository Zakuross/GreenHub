import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Product from '@/components/products/Product.vue'
import Service from '@/components/services/Service.vue'
import Main from "@/components/Elements Page/Main.vue";
import Panier from '@/components/cart/Panier.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },

  {
    path: '/service',
    name: 'Service',
    component: Service
  }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/service',
      name: 'service',
      component: Service
    },
    {
      path: '/cart',
      name: 'cart',
      component: Panier
    },


  ]
})

export default router
