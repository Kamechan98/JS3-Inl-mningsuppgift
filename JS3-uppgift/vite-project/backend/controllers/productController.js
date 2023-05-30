const router = require('express').Router();
const { addProduct, getProducts, getProductById, updateProduct, deleteProduct } = require('../models/productModel');
const { verifyToken, checkAdmin } = require('../authentication/auth')



// Create
router.post('/', verifyToken, checkAdmin, addProduct);

// Read
router.get('/', getProducts);
router.get('/:id', getProductById);

// Update
router.put('/:id', verifyToken, checkAdmin, updateProduct);

// Delete
router.delete('/:id', verifyToken, checkAdmin, deleteProduct);

module.exports = router;