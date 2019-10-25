<template>
  <div>
    {{product.title}}
    <button v-on:click="addToCart(product.variants[0].id)">Add To Cart</button>
  </div>
</template>

<script>
  import storefront from '../sdk/storefront.js'
  export default {
    props: ['product'],
    methods: {
      async addToCart(itemId) {
        storefront.addToCart({ itemId, quantity: 1 })
      }
    }
  }
</script>

<style scoped>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    height: 100px;

  }
</style>
