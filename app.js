const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
require('dotenv').config()
const con = require('./MongooseConnection')
const productRutas = require('./routes/ProductsRoutes.js')
const MongoClient = require('mongodb').MongoClient
const conn_String = "mongodb+srv://goyita:12345@cluster0.dokcfjz.mongodb.net/Electro"
app.use(express.json());
const Rutas = require('./routes/web');
const authJwt = require('./auth/jwt');
app.use(authJwt());
const userRouter = require('./routes/UserRouter')
app.use('/api/v1/products',productRutas);
app.use('/api/v1/users',userRouter);
app.use('/api/v1',Rutas);
const { Connection } = require('./Connection');

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
  try {
    mongoose.connect(process.env.CONN_STRING).then(()=>{
      const Cat = mongoose.model('Cat', { name: String });
      const kitty = new Cat({ name: 'Zildjian' });
      kitty.save().then(() => console.log('meow'));
    });
    console.log('Connected to Mongo');
  } catch (error) {
    console.log('Error connecting to Mongo'+ error)
  }
})
