const Order = require('../schemas/orderSchema');

// Create new order

exports.addOrder = async (req, res) => {
  
  const { customerId, orderRow, orderStatus  } = req.body;
  if(!orderRow) return res.status(400).json({ message: 'You need to enter products and quantity to your cart' })


  // Creating new order with the logged in user's id as customerId
  const order = await Order.create({
    customerId,
    orderRow,
    orderStatus
  })

  if(!order) return res.status(500).json({ message: 'Something went wrong when creating order' })

  // Adding entered product and quantity as a new object in orderRow array
  res.status(201).json(order)
}

// Add new order rows to existing order

// exports.addToExistingOrder = async (req, res) => {
  
//   const { product, quantity } = req.body
//   if(!product || !quantity) res.status(400).json({ message: 'You need to enter product and quantity' })
  
//   const order = await Order.findById(req.params.id)
//   if(!order) res.status(404).json({ message: 'Could not find order' })
  
//   // Adding entered product and quantity as a new object in orderRow array
//   order.orderRow.push({ product, quantity })
//   await order.save()

//   res.status(201).json(order)

// }

// Get all orders



// exports.getOrders = async (req, res) => {

//   const orders = await Order.find()

//   if(!orders) res.status(500).json({ message: 'Something went wrong when getting orders' })

//   res.status(200).json(orders)
// }

exports.getOrders = async (req, res) => {

  const orders = await Order.find()
  .populate({ path: 'orderRow.product', select: 'name price imageURL' })
  .populate({ path: 'orderStatus', select: 'status' })

  if(!orders) res.status(500).json({ message: 'Something went wrong when getting orders' })

  res.status(200).json(orders)
}


// Get a specific order by id

exports.getOrderById = async (req, res) => {

  const order = await Order.findById(req.params.id)
  .populate({ path: 'orderRow.product', select: 'name price quantity imageURL' })
  .populate({ path: 'orderRow.product.quantity', select: 'quantity' })
  .populate({ path: 'orderStatus', select: 'status' })

  if(!order) res.status(404).json({ message: 'Could not find order' })

  res.status(200).json(order)
}


// Get all orders made by specific user

exports.getOrdersByUser = async (req, res) => {

  const orders = await Order.find({ customerId: req.params.id })
  .populate({ path: 'orderRow.product', select: 'name price imageURL' })
  .populate({ path: 'orderStatus', select: 'status' })

  if(!orders) res.status(404).json({ message: 'Could not find orders' })

  res.status(200).json(orders)
}

exports.updateStatus = async (req, res) => {
  const { orderStatus } = req.body
  const order = await Order.findByIdAndUpdate(req.params.id,{orderStatus},{new: true})
  if(!order) return res.status(404).json({ message: 'Could not find orders' })
  res.status(200).json(order)

}