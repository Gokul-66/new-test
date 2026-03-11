const express = require('express');
const { createOrder, getOrders } = require('../services/order-service');
const router = express.Router();


router.post('/', async (req, res) => {
    return createOrder(req, res);
});

router.get('/:userEmail/:page_size/:page_num', async (req, res) => {
    return getOrders(req, res);
});
module.exports = router;