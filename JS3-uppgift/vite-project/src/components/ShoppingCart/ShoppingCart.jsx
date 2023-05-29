import React from 'react'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../store/features/shoppingCart/shoppingCartSlice'
import { Link } from 'react-router-dom'

const ShoppingCart = () => {

  const { cart, totalAmount } = useSelector(state => state.shoppingCart)
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  return (
    <div className='ShoppingCart'>
      {
        cart.length < 1 && (
          <p>You have no items in your shopping cart</p>
        )
      }
      {
        cart.map(item => <CartItem key={'cart' + item.product._id} item={item} />)
      }
      <div className="total">
        <p className='total-price'>Total amount:<span className='bold'> ${totalAmount}</span></p>
        <div className="buttons">
          <button className='cart-btn clear' onClick={() => dispatch(clearCart())}>Clear Cart</button>
          <Link to={user == null ? `/login` : '/checkout'} className='cart-btn checkout'>To Checkout</Link>
          {/* <Link to="/checkout" className='cart-btn checkout'>To Checkout</Link> */}
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart