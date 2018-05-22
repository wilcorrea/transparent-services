<template>
  <table>
    <tr>
      <th>Name</th>
      <th>Price</th>
    </tr>
    <tr v-for="(row, key) in rows" :key="key">
      <td>{{ row['name'] }}</td>
      <td>{{ row['price'] | money }}</td>
    </tr>
  </table>
</template>

<script>
import { money } from 'src/support/formatter'
import Product from 'src/domains/Product/Service/Product'

export default {
  name: 'ProductTable',
  service: Product.build({}),
  data: () => ({
    rows: []
  }),
  filters: {
    money: money
  },
  mounted () {
    // this.$service = null
    this.$service.read().then(rows => {
      this.rows = rows
    })
  }
}
</script>

<style scoped>
  table {
    width: 100%;
  }

  table, th, td {
    border: solid 1px #d0d0d0;
    border-collapse: collapse;
  }
</style>
