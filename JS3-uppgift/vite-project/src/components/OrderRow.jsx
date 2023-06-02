import React, { useEffect, useState } from 'react'
import useFetch from './useFetch'
import { getOrderById } from '../store/features/orders/orderSlice';
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';

const OrderRow = ({row}) => {

        //row.product = id 

        const dispatch = useDispatch();
        const { id } = useParams()
      

        useEffect(() => {
            dispatch(getOrderById(id));
        }, []);

  return (
    <div>

        { row.product && <div key={row.product.id} className='row-wrapper'> 
                            
        <img src={row.product.imageURL} alt={row.product.name} className='orderRowImg'/>
        <p><b>Product:</b> {row.product.name}</p>
        <p><b>Quantity:</b> {row.product.quantity}</p>
        </div>}

    </div>
  )
}

export default OrderRow