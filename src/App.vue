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


