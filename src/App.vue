<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import footerView from './components/Elements Page/footerVue.vue'
import Product from './components/Commande/product.vue'
import Service from './components/Commande/service.vue'
import Panier from './components/Commande/panier.vue'


</script>

<template>
  <header>



    <div class="wrapper">
      <div class="content">
        <div class="top-bar">


        </div>

      </div>
    </div>

      <nav>
<!--        <RouterLink to="/">Home</RouterLink>-->
<!--        <RouterLink to="/about">About</RouterLink>-->
        <RouterLink to="/blog">Blog</RouterLink>
        <RouterLink to="/produit">Product</RouterLink>
        <RouterLink to="/service">Service</RouterLink>
        <RouterLink to="/panier">Panier</RouterLink>
        <img alt="GreenHub Logo" class="logo" src="@/assets/logo3.svg" width="500" height="500" />
      </nav>
  </header>

  <main>
    <img alt="GreenHub Logo 2" class="logo" src="@/assets/logo4.svg" width="750" height="750" />
  </main>


  <footer>
    <footer-view/>
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}



nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    padding-right: calc(var(--section-gap) / 2);
  }


  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

@media (min-width: 320px) and (min-height: 743px) {
  .logo {
    margin: 0;
    padding: 0;
  }

  nav {



  }


}
</style>
