<template>
  <div class="products">
    <h1 class=" text-center">All Products</h1>
    <div class="search-bar-wrapper">
      <div class="search-bar text-center">
        <div class="form-control">
          <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
        </div>
      </div>
    </div>
    <div class="product-list">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" :alt="product.title" class="product-image">
        <div class="product-details">
          <h2>{{ product.title }}</h2>
          <p>{{ product.description }}</p>
          <div class="buttons">
            <button @click="" class="btn btn-primary">Ajouter au panier {{product.price}} €</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 import { useHttpStore } from '@/stores/httpStore.js';
import { watchEffect} from 'vue'
 export default {

   data() {
     return {
       products: [],
     };
   },
   methods: {
     async fetchProducts() {
       const httpStore = useHttpStore()
       this.products = await httpStore.getProducts()
     }
   },
   created() {
     this.fetchProducts()
   },


    // setup() {
    //    const store = useHttpStore();
    //   watchEffect(()=>{
    //     store.getProducts()
    //   })
    //   return {
    //     products: store.product,
    //   }
    // }




 }


</script>
<style scoped>

.search-bar-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.search-bar {
  width: 80%;
}


.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product-card {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
}

.product-image {
  width: 100%;
  border-radius: 5px;
}



.product-details {
  margin-top: 10px;
}
</style>