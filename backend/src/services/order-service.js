

import Order from '../models/order.js';
import Product from '../models/product.js';

export async function createOrder (req, res) {
   try {
        const { userEmail, products, totalAmount } = req.body;
        const  { productId, quantity } = req.body;
        await updateStock(productId, quantity);
        const status = 'pending';
        const order = new Order({ userEmail, products, totalAmount, status, createdAt: new Date() });
        await order.save();
        res.status(201).json(order);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }  
}
export async function getOrders (req, res) {
    try {
        const { userEmail, page_size, page_num } = req.params;
        const skip = page_size * (page_num - 1);
        const orders = await Order.find({ userEmail }).skip(skip).limit(parseInt(page_size));;
        res.status(200).json(orders);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}

function updateStock(productId, quantity) {
    Product.findById(productId, (err, product) => {
        if (err) {
            console.error(err);
            return;
        }
        if (!product) {
            console.error('Product not found');
            return;
        }
        product.stock -= quantity;
        product.save((err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('Stock updated successfully');
            }
        });
    });
}
