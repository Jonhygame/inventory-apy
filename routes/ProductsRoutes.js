var express = require('express')
var router = express.Router()
const Product = require('../models/product.js')

router.get('/', (req, res) => res.send('Hi World!'))

router.get('/hola',async (req, res) => {
  const count = await Product.count({})
  res.send("<H1>numero " + count + "<H1>")
})

router.get('/products',async (req, res) => {
  const products = await Product.find({})
  res.send(products)
})

router.post('/products', async (req, res) => {
  const count = await Product.count({})
  const product = new Product({
    id: count++,
    name: req.body.name,
    price: req.body.price,
    color: req.body.color,
    size: req.body.size,
    quantity: req.body.quantity,
    image: req.body.image,
    category: req.body.category
  })
  const result = await product.save();
  console.log(`A document was inserted with the _id: ${product.id}`);
  res.send("Product inserted...")
})

router.get('/products/:product_id',async (req, res) => {
  const products = await Product.findOne({ id: req.params.product_id }).exec();
  res.send(products)
})

router.delete('/products/:product_id',async (req, res)=>{
  const products = await Product.deleteOne({ id:parseInt(req.params.product_id)});
  res.send('Product deleted...')
})


module.exports = router;