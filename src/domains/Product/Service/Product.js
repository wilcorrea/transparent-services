import Api from 'src/service/Api'
import { promise } from '../../../service/helper'

export default class Product extends Api {
  /**
   * @param {*} options
   */
  constructor (options) {
    super(options, '/api/v1/market/products')
  }

  /**
   * @param {string} id
   */
  read (id) {
    return promise([{status: 'READ', name: 'Book', price: 10.13}])
  }
}
