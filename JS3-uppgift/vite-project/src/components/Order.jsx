import React from 'react'
import { useSelector } from 'react-redux'
import useFetch from './useFetch'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import OrderRow from './OrderRow'

const Order = () => {

  const navigate = useNavigate()
  
    const { user } = useSelector(state => state.auth)
    if(!user) return <Navigate to='/login'/>

    const {id} = useParams()
    const { data: order } = useFetch('http://localhost:9999/api/orders/' + id)
    // if(!order) return
    // console.log(order)


    const updateOrderStatus = async (status) => {
      // if(!validateProduct(formData, setErrors)) return
      const orderStatus = {orderStatus:status}
      const res = await fetch ('http://localhost:9999/api/orders/' + id, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          authorization: 'Bearer ' + user 
        },
        body: JSON.stringify(orderStatus)
      })
      if(res.status === 200) navigate('/orders')
    
      if(res.status === 401)setValidationError('You need to be ADMIN in order to post')  
    }
    
    return (
      <div className='order-wrapper'>
        <p className='ordernumber'><b>Ordernumber:</b> {order && order._id}</p>
        <div className='update-status'>
        <button className='status' onClick={ ()=> updateOrderStatus('Completed')}>Completed</button>
        <button className='status' onClick={ ()=> updateOrderStatus('Pending')}>Pending</button>
        <button className='status' onClick={ ()=> updateOrderStatus('In Transit')}>In Transit</button>
        <button className='status'  onClick={ ()=> updateOrderStatus('Cancelled')}>Cancelled</button>
        </div>
        <p className='p-status'>Status: {order && order.orderStatus}</p>
        {order && order.orderRow.map((row) => (
       <OrderRow row={row}/>                 
        ))}
      </div>
  )
}
export default Order