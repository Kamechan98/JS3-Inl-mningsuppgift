import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllOrders } from '../store/features/orders/orderSlice';
import CartItem from '../components/ShoppingCart/CartItem'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import useFetch from '../components/useFetch';


const OrderList = () => {

    const { data: orders } = useFetch('http://localhost:9999/api/orders/')

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cart, totalAmount } = useSelector(state => state.shoppingCart)
    const { user } = useSelector(state => state.auth)
    if(!user) return <Navigate to='/login'/>

    // fetching all orders getOrderByIdAsync
    useEffect(() => {
        dispatch(getAllOrders(user._id));
    }, []);

    // If user logs out while on this page - redirects to login
    useEffect(() => {
        if(!user) {
            navigate('/login')
        }
    }, [user])

    return (
      <div className='allOrders'>
        <div className='curOrders'>
      
      <div className='prevOrders'>
            <h1>All orders</h1>
            {orders && orders.map((order) => (
                <Link to={order._id}>
                <div key={order._id} className='order-wrapper'>
                    <p className='ordernumber'><b>Ordernumber:</b> {order._id}</p>
                    <p>Status: {order.orderStatus}</p>
                    {order.orderRow.map((row) => (
                        
                        <div key={row._id} className='row-wrapper'>
                            
                            { row.product && <img src={row.product.imageURL} alt={row.product.name} className='orderRowImg'/>}
                            { row.product && <p><b>Product:</b> {row.product.name}</p>}
                            { row.product &&<p><b>Quantity:</b> {row.quantity}</p>}
                        </div>
                    ))}
                </div>
                    </Link>
            ))}
        </div>
        </div>
        </div>
    );


}

export default OrderList

