import React, { useEffect } from 'react'
import { getOrderById } from '../store/features/orders/orderSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import useFetch from '../components/useFetch';

const OrderDetails = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrderById(order._id));
    }, []);
    const {id} = useParams()
    const { data: order } = useFetch('http://localhost:9999/api/orders/' + id)
    // const { order } = useSelector(state => state.order);

    // const {user} = useSelector(state => state.auth)
    // if(!user) return <Navigate to='/login'/>
    
  return (
    <div className='order-wrapper'>
    
        <div className='row-wrapper'>
                            
    
        </div>
        </div>
  )
}

export default OrderDetails