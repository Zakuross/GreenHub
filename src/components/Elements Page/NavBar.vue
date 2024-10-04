<template>
  <div class="navbar bg-base-100 flex items-center justify-between">
    <div>
      <RouterLink to="/">
        <a class="btn btn-ghost text-xl">
          <img src="@/assets/logo_greenhub.webp" alt="Logo GreenHub" class="h-6">
        </a>
      </RouterLink>

    </div>

    <div class="navbar-start w-auto">

      <div class="dropdown" @click="isOpen = !isOpen">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <i-ph-list-bold></i-ph-list-bold>
<!--          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>-->

        <ul tabindex="0" class="menu menu-sm dropdown-menu mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52" :class="{show: isOpen}">
<!--          <RouterLink to="/">-->
<!--            <li><a>Accueil</a></li>-->
<!--          </RouterLink>-->
          <router-link to="/products-view">
            <li><a class="dropdown-item">Product</a></li>
          </router-link>
          <RouterLink to="/service">
            <li><a class="dropdown-item">Service</a></li>
          </RouterLink>
        </ul>
        </div>
      </div>
    </div>
    <div class="flex-none">
      <RouterLink to="/connexion"><button class="btn btn-square btn-ghost">
        <i-ph-user></i-ph-user>
      </button></RouterLink>
      <RouterLink to="/cart">
        <button class="btn btn-square btn-ghost">
          <i-ph-shopping-cart-simple></i-ph-shopping-cart-simple>
        </button>
      </RouterLink>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const isOpen = ref(false);
</script>

<style scoped>
.dropdown-menu.show {
  display: block;
}
</style>