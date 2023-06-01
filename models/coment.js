const mongoose = require('mongoose')

const comentSchema = mongoose.Schema({
    Name: { 
      type: String, required: true 
    },
    Email: { 
      type: String, required: true 
    },
    Message: { 
      type: String, required: true 
    }
}, { collection: 'contact' } )

const Coment = mongoose.model('Coment', comentSchema)

module.exports = Coment