import React, { useEffect } from 'react'
import { getOrderById } from '../store/features/orders/orderSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import useFetch from '../components/useFetch';
import Order from '../components/Order';

const OrderDetails = () => {
    
    const dispatch = useDispatch();
    const {id} = useParams()

    useEffect(() => {
        dispatch(getOrderById(id));
    }, []);

    const {user} = useSelector(state => state.auth)
    if(!user) return <Navigate to='/login'/>
    
  return (
    <div>
        <Order/>
    </div>
        
  )
}

export default OrderDetails