const router = require('express').Router();
const { addOrder, getOrderById, getOrdersByUser, addToExistingOrder, getOrders, updateStatus } = require('../models/orderModel');
const { verifyToken, checkAdmin } = require('../authentication/auth')


// Create
// router.post('/', verifyToken, addOrder)
router.post('/', addOrder)

// router.post('/add/:id', addToExistingOrder)
router.put('/:id', verifyToken, checkAdmin, updateStatus)
// Read
router.get('/', getOrders)
// router.get('/', verifyToken, checkAdmin, getOrders)
router.get('/:id', getOrderById)
router.get('/user/:id', getOrdersByUser)



module.exports = router;
