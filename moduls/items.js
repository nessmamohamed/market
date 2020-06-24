const mongoose = require('mongoose'),
      schema = mongoose.Schema 

      const ItemSchema = new schema({
          name: {
              type: String, 
              required: true
          },
          price: {
              type: Number,
              required: true
          },
          count: {
              type: Number,
              required: true
          },
          image: {
              type: String,
              required: true
          },
          code: {
              type: String,
              required: true
          },
          date: {
              type: Date,
              default: Date.now
          }

      })

      module.exports = Item = mongoose.model('Item', ItemSchema)