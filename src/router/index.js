import { createRouter, createWebHistory } from 'vue-router'

import Product from '@/components/products/Product.vue'
import ProductView from '@/views/product/ProductView.vue'
import Service from '@/components/services/Service.vue'
import Connexion from '@/components/authentication/Connexion.vue'
import Inscription from '@/components/authentication/Inscription.vue'
import Main from "@/components/Elements Page/Main.vue";
import Panier from '@/components/cart/Panier.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main
  },
  {
    path: '/products',
    name: 'Product',
    component: ProductView
  },
  {
    path: '/connexion',
    name: 'Connexion',
    component: Connexion
  },
  {
    path: '/inscription',
    name: 'Inscription',
    component: Inscription
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
      path: '/products',
      name: 'products',
      component: Product
    },
    {
      path: '/service',
      name: 'service',
      component: Service
    },
    {
      path: '/connexion',
      name: 'Connexion',
      component: Connexion
    },
    {
      path: '/inscription',
      name: 'Inscription',
      component: Inscription
    },
    {
      path: '/cart',
      name: 'cart',
      component: Panier
    },


  ]
})

export default router
