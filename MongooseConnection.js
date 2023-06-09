const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.CONN_STRING);

let connectionObj = mongoose.connection

connectionObj.on('connected', ()=> {
    console.log('MongoDB connection successful  ')
})

connectionObj.on('error', (e)=> {
    console.log('MongoDB connection failed...' + e)
})
