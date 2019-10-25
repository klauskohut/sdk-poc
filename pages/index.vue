<template>
  <div class="container">
    <ProductsList v-bind:products="products" />
    <a v-bind:href="checkout.url" target="_blank">
      Checkout
    </a>
  </div>
</template>

<script>

import storefront from '../sdk/storefront.js'
import ProductsList from '../components/ProductsList'


export default {
  components: {
    ProductsList
  },
  data() {
    return {
      products: [],
      checkout: {
        url: ''
      }
    }
  },
  async mounted() {
    await storefront.initialize(process.env.STORE_PLATFORM, {
      domain: process.env.STORE_DOMAIN,
      storefrontAccessToken: process.env.STORE_TOKEN,
    })

    storefront.fetchProducts().then(products => {
      this.products = products
    })

    const checkoutId = localStorage.getItem('checkoutId')

    if (checkoutId) return storefront.getCheckout(checkoutId).then(checkout => {
      this.checkout.url = checkout.webUrl
    })

    storefront.createCheckout()
  }
}
</script>

<style scoped>
  a {
    margin: 40px;
    background-color: gray;
    color: black;
    font-size: 18px;
    padding: 10px;
    text-decoration: none;
  }
</style>
