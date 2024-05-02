<template>
  <div>
    <div class="acceuil-mobile w-full bg-base-100">
      <img src="@/assets/accueil_mobile.webp" alt="Accueil GreenHub" class="max-w-96 h-fit w-96">
    </div>
    <div class="text-center">
      <h1 class="mt-4 font-bold text-2x1">New Products !</h1>
    </div>
    <div class="flex justify-center mt-8">
      <div class="flex flex-wrap justify-center">
        <template v-for="(pair, index) in productPairs" :key="index">
          <div class="flex justify-center w-full md:w-1/2">
            <template v-for="(product, productIndex) in pair" :key="productIndex">
              <div class="card w-full md:w-96 bg-base-100 shadow-xl md:m-4 mb-4">
                <figure class="px-10 pt-10">
                  <img :src="product.image" :alt="product.name" class="rounded-xl product-image"/>
                </figure>
                <div class="card-body items-center text-center">
                  <h2 class="card-title">{{ product.name }}</h2>
                  <p>{{ product.description }}</p>
                  <div class="card-actions">
                    <button class="btn btn-primary">{{ product.price }} €</button>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </template>
      </div>
    </div>

    <div class="text-center">
      <h1 class="mt-4 font-bold text-2x1">Eco-responsible services ? <br>It's possible !!</h1>
    </div>
    <div class="flex justify-center mt-8">
      <div class="flex flex-wrap justify-center">
        <template v-for="(pair, index) in servicePairs" :key="index">
          <div class="flex justify-center w-full md:w-1/2">
            <template v-for="(service, serviceIndex) in pair" :key="serviceIndex">
              <div class="card w-full md:w-96 bg-base-100 shadow-xl md:m-4 mb-4">
                <figure class="px-10 pt-10">
                  <img :src="service.image" :alt="service.name" class="rounded-xl service-image"/>
                </figure>
                <div class="card-body items-center text-center">
                  <h2 class="card-title">{{ service.name }}</h2>
                  <p>{{ service.description }}</p>
                  <div class="card-actions">
                    <button class="btn btn-primary">{{ service.price }} €</button>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </template>
        <div class="text-center">
          <h1 class="mt-4 font-bold text-2xl">Derniers Posts</h1>
        </div>
        <div class="flex justify-center mt-8">
          <div class="flex flex-wrap justify-center">
            <div v-for="(post, index) in latestPosts" :key="index" class="card w-full md:w-96 bg-base-100 shadow-xl md:m-4 mb-4">
              <h2 class="card-title items-center text-center">{{ post.name }}</h2>
              <figure class="px-10 pt-10">
                <img :src="post.image" :alt="post.name" class="rounded-xl post-image"/>
              </figure>
              <div class="card-body items-center text-center">
                <p>{{ post.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import cubeVaisselleImage from '@/assets/cube_vaisselle.webp'
import charlotteAlimentaireImage from '@/assets/charlotte_alimentaire.webp'
import lavageVoiture from '@/assets/lavage_voiture.webp'
import localVelo from '@/assets/location_velo.webp'


export default {
  name: 'Home',
  data() {
    return {
      products: [
        { name: 'Dish Cube', description: 'Solid, highly effective soap', price: 6, image: cubeVaisselleImage },
        { name: 'Food Charlotte', description: 'Charlotte alimentaire en tissu', price: 6, image: charlotteAlimentaireImage },
      ],
      services: [
        {name: 'Car Wash', description: 'All-Inclusive!', price: 20, image: lavageVoiture },
        {name: 'Bicycle rental', description: 'Ecological and practical!', price: 6, image: localVelo},
      ],
      latestPosts : [
        {name: 'Food charlotte: a revolution', description: `Food charlottes are now everywhere, in our kitchens, schools and stores. They've simply become a must-have!`, image: charlotteAlimentaireImage}
      ]
    };
  },
  computed: {
    productPairs() {
      const pairs = [];
      let tempPair = [];
      this.products.forEach((product, index) => {
        tempPair.push(product);
        if ((index + 1) % 2 === 0 || index === this.products.length - 1) {
          pairs.push(tempPair);
          tempPair = [];
        }
      });
      return pairs;
    },
    servicePairs() {
      const pairs = [];
      let tempPair = [];
      this.services.forEach((service, index) => {
        tempPair.push(service);
        if ((index + 1) % 2 === 0 || index === this.services.length - 1) {
          pairs.push(tempPair);
          tempPair = [];
        }
      });
      return pairs;
    }
  }
}
</script>

<style scoped>

.service-image {
  width: 100%;
  border-radius: 5px;
}

.product-image {
  width: 100%;
  border-radius: 5px;
}

.post-image {
  width: 100%;
  border-radius: 5px;
}



</style>