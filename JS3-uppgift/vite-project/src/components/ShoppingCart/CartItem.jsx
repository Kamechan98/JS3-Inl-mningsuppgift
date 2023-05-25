import React from 'react'
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addToCart, removeAll, removeOne } from '../../store/features/shoppingCart/shoppingCartSlice'

const CartItem = ({ item }) => {

  const dispatch = useDispatch()

  const add = () => {
    dispatch(addToCart(item.product))
  }

  const remove = () => {
    dispatch(removeOne(item.product._id))
  }

  const emptyRow = () => {
    dispatch(removeAll(item.product._id))
  }

  return (
    <div className='CartItem'>
      
      {/* Row */}
      <div className='row'>
        <div className='row-left'>
          <img src={item.product.imageURL} alt={item.product.name} className='item-img' />
          <p className='item-name'>{item.product.name}</p>
        </div>
        <div className='row-right'>
          <p>{item.quantity} x ${item.product.price},00</p>
          <div className="buttons">
            <button className="cart-btn clear" onClick={emptyRow}><FaTrash /></button>
            <button className="cart-btn" onClick={remove}><FaMinus /></button>
            <button className="cart-btn" onClick={add}><FaPlus /></button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CartItem