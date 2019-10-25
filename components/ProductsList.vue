<template>
  <ul>
    <li v-for="(item, index) in products">
      <Product v-bind:product="item"/>
    </li>
  </ul>
</template>

<script>
  import Product from './Product'
  export default {
    components: {
      Product
    },
    props: ['products']
  }
</script>

<style scoped>
  ul {
    display: flex;
    flex-flow: row;
  }

  li {
    margin: 40px;
  }

</style>
