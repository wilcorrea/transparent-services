<template>
  <div class="hello">
    <ProductTable v-bind:service="service"/>
  </div>
</template>

<script>
import ProductTable from 'src/domains/Product/Components/ProductTable'
import Product from 'src/domains/Product/Service/Product'

export default {
  name: 'HelloWorld',
  components: {
    ProductTable
  },
  data: () => ({
    service: Product.build({})
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
