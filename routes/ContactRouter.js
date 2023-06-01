var express = require('express')
var router = express.Router()
const Coment = require('../models/coment.js')

router.get('/contact', (req, res) => res.send('Desde contacto hola'))

router.get('/contacts',async (req, res) => {
  const count = await Coment.count({})
  res.send("<H1>numero " + count + "<H1>")
})

router.get('/AA',async (req, res) => {
  const coment = await Coment.find({})
  res.send(coment)
})

router.post('/products', async (req, res) => {
  const count = await Coment.count({})
  const coment = new coment({
    id: count++,
    Name: req.body.name,
    Email: req.body.price,
    Message: req.body.color
  })
  const result = await Coment.save();
  console.log(`A document was inserted with the _id: ${product.id}`);
  res.send("Product inserted...")
})

router.get('/products/:product_id',async (req, res) => {
  const Coment = await Coment.findOne({ id: req.params.product_id }).exec();
  res.send(products)
})

router.delete('/products/:product_id',async (req, res)=>{
  const Coment = await Coment.deleteOne({ id:parseInt(req.params.product_id)});
  res.send('Product deleted...')
})


module.exports = router;