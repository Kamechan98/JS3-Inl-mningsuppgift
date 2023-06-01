import React, { useEffect, useState } from 'react'
import useFetch from './useFetch'
import { getOrderById } from '../store/features/orders/orderSlice';
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';

const OrderRow = ({row}) => {
        //row.product = id 

        const dispatch = useDispatch();
        const { id } = useParams()
        const { data: product } = useFetch('http://localhost:9999/api/products/')

        // const [orderRowData, setOrderRowData] = useState({
        //     name: row.product.name,
        //     description: row.product.description,
        //     price: row.product.price,
        //     imageURL: row.product.imageURL,
        //     quantity: row.product.quantity
        // })

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