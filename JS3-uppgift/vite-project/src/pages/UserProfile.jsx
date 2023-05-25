import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/ShoppingCart/CartItem'
import { Link } from 'react-router-dom'
import { clearCart } from '../store/features/shoppingCart/shoppingCartSlice'

const UserProfile = () => {

  const { cart, totalAmount } = useSelector(state => state.shoppingCart)
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  return (
    <div className='UserProfile'>
      <h1>Welcome back!</h1>
      <div className="current-order">
        <h2>Current Order:</h2>
        { cart.length < 1 && (
          <p>You have no items in your shopping cart</p>
        ) }
        { cart.map(item => <CartItem key={'user-cart' + item.product._id} item={item} />) }
        <p className='price'>Total Price: ${totalAmount},00</p>
        <div className="order-buttons">
          <button className='cart-btn clear' onClick={() => dispatch(clearCart())}>Clear Cart</button>
          <Link to="/checkout" className='cart-btn'>To Checkout</Link>
        </div>
      </div>
      <div className="prev-orders">
        <h2>Previous Orders:</h2>
      </div>
    </div>
  )
}

export default UserProfile