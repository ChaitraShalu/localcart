const mongoose = require('mongoose')
const Schema = mongoose.Schema


const orderSchema = new Schema({
    order_id : {
        type: String,
        required: true
    },
    billing_address: {
         type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order