import { defineStore } from 'pinia'
import axios from './store.js'


// axios.defaults.baseURL = import.meta.env.VITE_FAKESTORE_URL
// axios.defaults.baseURL = import.meta.env.VITE_API_URL
// axios.defaults.withCredentials = true
// axios.defaults.withXSRFToken = true
export const useHttpStore = defineStore({
  id: 'http',
  state: () => ({
    products: null,
    product: null,
  }),
  // getters: {
  //   currentUser(){
  //     return this.user
  //   },
  // },
  actions: {

    async getProducts() {
      try {
        let response = await axios.get('/products')
        this.product = response
        return this.product
      } catch (error) {
        console.log('Error fetching product: 1',error)
      }
    },

    async getProduct(id) {
      try {
        let response = await axios.get("/products"+id)
        this.product = response.data;
        return this.product
      }catch (error) {
        console.log('Error fetching product: 2', error);
      }
    }






  }
})