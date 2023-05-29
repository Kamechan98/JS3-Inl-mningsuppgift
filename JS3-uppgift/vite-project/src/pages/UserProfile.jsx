import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/ShoppingCart/CartItem'
import { Link, useNavigate } from 'react-router-dom'
import { clearCart } from '../store/features/shoppingCart/shoppingCartSlice'
import { logOut } from '../store/features/auth/authSlice'

const UserProfile = () => {

  const { cart, totalAmount } = useSelector(state => state.shoppingCart)
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // If user logs out using "Sign in as another user" - redirects to login
  const logoutAndNavigate = () => {
    dispatch(logOut())
    navigate('/login')
  }

  // If user logs out using logout-button in navbar while on this page - redirects to login
  useEffect(() => {
    if(!user) {
        navigate('/login')
    }
  }, [user])
  
  return (
    <div className='UserProfile'>
      <h1>Welcome back!</h1>
      <p>You are currently logged in as {user.email}</p>
      <p>Not you? <span className='link' onClick={logoutAndNavigate}>Sign in as another user here</span></p>
      {/* <div className="current-order">
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
      </div> */}
    </div>
  )
}

export default UserProfile