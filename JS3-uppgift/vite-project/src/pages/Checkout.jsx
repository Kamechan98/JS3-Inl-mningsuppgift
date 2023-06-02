import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/ShoppingCart/CartItem'
import { useDispatch } from 'react-redux';
import { addOrder } from '../store/features/orders/orderSlice';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../store/features/shoppingCart/shoppingCartSlice';

const Checkout = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cart, totalAmount } = useSelector(state => state.shoppingCart)
  const { user } = useSelector(state => state.auth)

  // const placeOrder = () => {
  //   const order = cart.map(item => {
  //     return { id: item.product._id, quantity: item.quantity }
  //   })

  //   dispatch(addOrder(order));
  // }

  const placeOrder = () =>{
    
    
    const orderData ={
      customerId: user._id,
      orderRow: cart.map(item =>({
        product: item.product,
        quantity: item.quantity
      }))
    }


    dispatch(addOrder(orderData));
    dispatch(clearCart())
    navigate('/')

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

        <button className="cart-btn" onClick={placeOrder}>
          Complete Purchase
        </button>
      </div>
    </div>
  )
}

export default Checkout