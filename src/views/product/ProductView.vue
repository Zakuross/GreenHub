<template>
  <section class="py-10 font-poppins ">
    <div class="max-w-6xl px-4 mx-auto">
      <div class="flex flex-wrap mb-24 -mx-4">
        <div class="w-full px-4 mb-8 md:w-1/2 md:mb-0">
          <div class="sticky top-0 overflow-hidden ">
            <div class="relative mb-6 lg:mb-10 lg:h-96">
              <a class="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     class="w-5 h-5 text-cyan-500 bi bi-chevron-left " viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z">
                  </path>
                </svg>
              </a>
              <img class="object-contain w-full lg:h-full"
                   :src="product?.image" alt="">
              <a class="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     class="w-5 h-5 text-cyan-500 bi bi-chevron-right " viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                  </path>
                </svg>
              </a>
            </div>
            <div class="flex-wrap hidden -mx-2 md:flex">
              <div class="w-1/2 p-2 sm:w-1/4">
                <router-link to="products-list">
                <a
                  class="block border border-gray-200 hover:border-cyan-400  "
                  href="#">
                  <img class="object-contain w-full lg:h-28"
                       src="https://i.postimg.cc/Z5KhRkD6/download-1-removebg-preview.png" alt="">
                </a>
                </router-link>
              </div>
              <div class="w-1/2 p-2 sm:w-1/4">
                <router-link to="products-list">
                <a
                  class="block border border-gray-200 hover:border-cyan-400"
                  href="#">
                  <img class="object-contain w-full lg:h-28"
                       src="https://i.postimg.cc/8kJBrw03/download-removebg-preview.png" alt="">
                </a>
                </router-link>
              </div>
              <div class="w-1/2 p-2 sm:w-1/4">
                <router-link to="products-list">
                <a
                  class="block border border-gray-200 hover:border-cyan-400 "
                  href="#">
                  <img class="object-contain w-full lg:h-28"
                       src="https://i.postimg.cc/0jwyVgqz/Microprocessor1-removebg-preview.png" alt="">
                </a>
                </router-link>
              </div>
              <div class="w-1/2 p-2 sm:w-1/4">
                <router-link to="products-list">
                <a
                  class="block border border-gray-200 hover:border-cyan-400"
                  href="#">
                  <img class="object-contain w-full lg:h-28"
                       src="https://i.postimg.cc/0N4Kk1PN/black-microprocessors-removebg-preview.png" alt="">
                </a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full px-4 md:w-1/2">
          <div class="lg:pl-20">
            <div class="mb-6 ">
              <span
                class="px-2.5 py-0.5 text-xs text-white bg-secondary ">{{ product?.category.name}}</span>
              <h2
                class="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl ">
                {{ product?.name }}
              </h2>
              <div class="flex flex-wrap items-center mb-6">
                <ul class="flex mb-4 mr-2 lg:mb-0">
                  <li>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                           class="w-4 mr-1 text-red-500 bi bi-star " viewBox="0 0 16 16">
                        <path
                          d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                        </path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                           class="w-4 mr-1 text-red-500 bi bi-star " viewBox="0 0 16 16">
                        <path
                          d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                        </path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                           class="w-4 mr-1 text-red-500 bi bi-star " viewBox="0 0 16 16">
                        <path
                          d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                        </path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                           class="w-4 mr-1 text-red-500 bi bi-star " viewBox="0 0 16 16">
                        <path
                          d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                        </path>
                      </svg>
                    </a>
                  </li>
                </ul>

              </div>
              <p class="inline-block text-2xl font-semibold text-gray-700">
                <span>{{ product?.price }} €</span>
              </p>
            </div>
            <div class="mb-6">
              <h2 class="mb-2 text-lg font-bold text-gray-700 ">Description :</h2>
              <div class="p-3 lg:p-5 ">
                <div class="flex ">
                  <span class="mr-3 text-gray-500">
                  </span>
                  <div>

                    <h2 class="text-base font-semibold text-gray-700 ">
                      {{ product?.description }}
                    </h2>
                    <!--                          </div>-->
                    <!--                        </div>-->
                    <!--                      </div>-->

                  </div>
                </div>
                <!--                </div>-->
              </div>
            </div>
            <div class="py-6 mb-6 border-t border-b border-gray-200">
              <span class="text-base text-gray-600 ">In Stock</span>
              <p class="mt-2 text-sm text-cyan-500 ">Ships from china.
                <span class="text-gray-600 ">
                    Most customers receive within 3-31 days.
                </span>
              </p>
            </div>
            <div class="mb-6 "></div>
            <div class="flex flex-wrap items-center mb-6">
              <div class="mb-4 mr-4 lg:mb-0">
                <div class="w-28">
                  <div class="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                    <button
                      class="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer ">
                      <span class="m-auto text-2xl font-thin">-</span>
                    </button>
                    <input type="number"
                           class="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none  focus:outline-none text-md hover:text-black"
                           placeholder="1">
                    <button
                      class="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-300">
                      <span class="m-auto text-2xl font-thin">+</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="mb-4 lg:mb-0">
                <button
                  class="flex items-center justify-center w-full h-10 p-2 mr-4 text-gray-700 border border-gray-300 lg:w-11 hover:text-gray-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                       class=" bi bi-heart" viewBox="0 0 16 16">
                    <path
                      d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z">
                    </path>
                  </svg>
                </button>
              </div>

              <button href="#" @click="cartStore.addItem(product)"
                      class="w-full px-4 py-3 text-center btn  btn-primary border border-cyan-600 hover:bg-cyan-600 hover:text-gray-100 lg:w-1/2 rounded-xl">
                Ajouter au Panier
              </button>
            </div>
            <div class="flex gap-4 mb-6">
              <router-link to="/cart" class="w-full ">
                <button href="#" @click="cartStore.addItem(product)"
                        class="w-full px-4 py-3 text-center btn btn-primary border border-transparent rounded-xl">
                  Acheter
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useHttpStore } from '@/stores/httpStore.js'
import { useCartStore } from '@/stores/cartStore.js'
export default {
  setup(){
    const cartStore = useCartStore()

    return  { cartStore }
  },
  data() {
    return {
      product: null
    }
  },
  methods: {

    async fetchProduct() {
      const httpStore = useHttpStore()
      this.product = await httpStore.getProduct(this.$route.params.id)
    }
  },
  created() {
    this.fetchProduct()
  }
}
</script>