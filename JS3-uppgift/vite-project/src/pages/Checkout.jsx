import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/ShoppingCart/CartItem'

const Checkout = () => {

  const { cart, totalAmount } = useSelector(state => state.shoppingCart)

  const placeOrder = () => {
    const order = cart.map(item => {
      return { id: item.product._id, quantity: item.quantity }
    })
  }

  return (
    <div className='Checkout'>
      <h1>Complete Your Purchase</h1>
      {
        cart.map(item => <CartItem key={'checkout' + item.product._id} item={item} />)
      }
      <div className='purchase'>
        <h2>Total Amount: ${totalAmount}</h2>
        <button className="cart-btn">Complete Purchase</button>
      </div>
    </div>
  )
}

export default Checkout