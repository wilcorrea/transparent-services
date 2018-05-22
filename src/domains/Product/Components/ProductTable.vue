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

const service = Product.build({})

export default {
  name: 'ProductTable',
  data: () => ({
    rows: []
  }),
  filters: {
    money: money
  },
  mounted () {
    service.read().then(rows => {
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
    border: solid 1px #ddd;
    border-collapse: collapse;
  }
</style>
