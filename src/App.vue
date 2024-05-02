<template>

  <div id="app">
    <NavBar></NavBar>
    <router-view></router-view>
    <Footer></Footer>
  </div>


</template>

<script>

import NavBar from "@/components/Elements Page/NavBar.vue";
import Footer from "@/components/Elements Page/Footer.vue";


export default {
  name: 'App',
  components: {Footer, NavBar}
}
</script>
<style scoped>
/* styles.css */
@media (min-width: 1000px) {
  /* Vos styles ici */
  body {
    background-color: lightblue;
  }
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem;
    margin-top: 1rem;
  }
}
</style>


