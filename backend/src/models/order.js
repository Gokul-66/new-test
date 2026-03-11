const mongoose = require("mongoose");
const user = require("./user");
const Schema = mongoose.Schema;

// Create Schema
const orderScheme = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    orderNumber: {
        type: String,
        required: true,
        unique: true
    },
    items: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: 'products',
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            priceAtPurchase: {
                type: Number,
                required: true
            },
            discountAtPurchase: {
                type: Number,
                default: 0
            } 
        }
    ],
    subtotal: { 
        type: Number,
        required: true
    },
    tax: { 
        type: Number,
        required: true
    },
    shippingCost: { 
        type: Number,
        required: true
    },
    total: { 
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
        default: 'pending'
    },
    paymentStatus: {
        type: String,
        required: true
    },
    shippingAddress: {
        street: String,
        city: String,
        state: String,
        zip: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }   

})
module.exports = Order = mongoose.model("orders", orderScheme);