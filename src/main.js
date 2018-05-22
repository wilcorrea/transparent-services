import Product from 'src/domains/Product/Service/Product'

const product = Product.build({})

product.read().then(console.warn)
