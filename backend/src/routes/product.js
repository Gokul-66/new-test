 const express = require('express');
const router = express.Router();
const { createProduct, getProducts, updateProduct, deleteProduct, getProductBySlug } = require('../services/product-service');
const { authMiddleware } = require('../middleware/access');

// Create a new product
router.post('/:role', authMiddleware(), async (req, res) => {
    return createProduct(req, res);
});

router.put('/:id/:role',authMiddleware(), async (req, res) => {
    return updateProduct(req, res);
});
router.delete('/:id/:role',authMiddleware(), async (req, res) => {
    return deleteProduct(req, res);
        });


// Get all products
router.get('/:page_size/:page_num', async (req, res) => {
   return getProducts(req, res);
});
router.get('/:slug', async (req, res) => {
    return getProductBySlug(req, res);
});
module.exports = router;