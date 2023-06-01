const express = require('express')
const app = express()
const port = 3000
const MongoClient = require('mongodb').MongoClient
const conn_String = "mongodb+srv://goyita:12345@cluster0.dokcfjz.mongodb.net/Electro"
app.use(express.json());
const Rutas = require('./routes/web');
const RutasContacts = require('./routes/ContactRouter');
const RutasProducts = require('./routes/ProductsRoutes');
app.use(RutasProducts);
app.use(RutasContacts);
app.use(Rutas);
const { Connection } = require('./Connection');

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
  const client = new MongoClient(conn_String)
  try {
    Connection.open();
    client.connect()
    db = client.db('Inventory')
    console.log('Connected to Mongo')
  } catch (error) {
    console.log('Error connecting to Mongo'+ error)
  }
})