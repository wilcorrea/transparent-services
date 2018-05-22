import Service from 'src/service/Service'
import { promise } from 'src/service/helper'

/**
 * @type {Api}
 */
export default class Api extends Service {
  /**
   * @param {Object} options
   * @param {string} resource
   */
  constructor (options, resource) {
    super(options)
    this.resource = resource
  }

  /**
   * @param {Object} record
   */
  create (record) {
    return promise({status: 'CREATE'})
  }

  /**
   * @param {string} id
   */
  read (id) {
    return promise([{status: 'READ'}])
  }

  /**
   * @param {Object} record
   */
  update (record) {
    return promise({status: 'UPDATE'})
  }

  /**
   * @param {Object} record
   */
  destroy (record) {
    return promise({status: 'DESTROY'})
  }
}
