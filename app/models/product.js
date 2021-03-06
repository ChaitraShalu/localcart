const mongoose = require('mongoose')
const Schema = mongoose.Schema


const productSchema = new Schema({
    product_title : {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
     image:{
        type: String
    }
    
    
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product