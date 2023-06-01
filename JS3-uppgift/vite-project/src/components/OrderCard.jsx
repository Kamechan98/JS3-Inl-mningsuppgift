import React from 'react'
import { NavLink } from 'react-router-dom'

const OrderCard = ({order}) => {
  return (
    <NavLink to={`/orders/${order._id}`}>
    <li className='order-wrapper'>
    <p className='ordernumber'><b>Ordernumber:</b> {order._id}</p>
    <p>Status: {order.orderStatus}</p>
    {order.orderRow.map((row) => (
                        
    <div key={row._id} className='row-wrapper'>
                            
    <img src={row.product.imageURL} alt={row.product.name} className='orderRowImg'/>
    <p><b>Product:</b> {row.product.name}</p>
    <p><b>Quantity:</b> {row.quantity}</p>
    </div>
    ))}
    </li>
    </NavLink>
    
  )
}

export default OrderCard