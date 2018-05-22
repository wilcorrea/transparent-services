import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from 'src/components/HelloWorld'
import Service from 'src/domains/Product/Service/Product'
import Component from 'src/domains/Product/Components/ProductTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/dashboard/products',
      component: Component,
      props: route => ({
        service: Service.build({})
      })
    }
  ]
})
