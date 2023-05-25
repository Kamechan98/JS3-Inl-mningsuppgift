const router = require('express').Router();
const { addOrder, getOrderById, getOrderByUser, addToExistingOrder, getOrders } = require('../models/orderModel');
const { verifyToken, checkAdmin } = require('../authentication/auth')


// Create
router.post('/', verifyToken, addOrder)
// router.post('/add/:id', addToExistingOrder)

// Read
router.get('/', verifyToken, checkAdmin, getOrders)
router.get('/:id', verifyToken, getOrderById)
router.get('/user/:id', verifyToken, getOrderByUser)



module.exports = router;
