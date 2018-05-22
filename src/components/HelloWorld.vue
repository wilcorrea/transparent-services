<template>
  <div class="hello">
    <ProductTable/>
  </div>
</template>

<script>
import ProductTable from 'src/domains/Product/Components/ProductTable'

export default {
  name: 'HelloWorld',
  components: {ProductTable}
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
