/**
 * @param Vue
 */
export default Vue => {
  Object.defineProperty(Vue.prototype, '$service', {
    get () {
      if (this.$options.service) {
        return this.$options.service
      }
      if (this.$props.service) {
        return this.$props.service
      }
      throw new Error('The component doesn\'t have a service')
    }
  })
}
