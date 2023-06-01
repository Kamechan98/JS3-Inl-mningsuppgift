import React from 'react'

const OrderRow = ({row}) => {

  return (
    <div className='order-card'>
        <div key={row.product.id} className='row-wrapper'>
                            
        <img src={row.product.imageURL} alt={row.product.name} className='orderRowImg'/>
        <p><b>Product:</b> {row.product.name}</p>
        <p><b>Quantity:</b> {row.quantity}</p>
        <p><b>Price:</b> {row.product.price}</p>
        </div>

    </div>
  )
}

export default OrderRow