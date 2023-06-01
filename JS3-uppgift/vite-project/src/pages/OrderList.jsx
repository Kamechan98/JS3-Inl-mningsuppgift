import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllOrders } from '../store/features/orders/orderSlice';
import CartItem from '../components/ShoppingCart/CartItem'
import { Link, Navigate, useNavigate } from 'react-router-dom';


const OrderList = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { products } = useSelector(state => state.products);
    const { orders } = useSelector(state => state.orders);
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

    // console.log(orders[0])
    // console.log(orders.orderRow)

    return (
      <div className='allOrders'>
        <div className='curOrders'>

        {/* <h1>Current orders</h1> */}
        {/* <div className="current-order">
        { cart.length < 1 && (
        //   <p>You have no items in your shopping cart</p>
        ) }
        { cart.map(item => <CartItem key={'user-cart' + item.product._id} item={item} />) }
        <p className='price'>Total Price: ${totalAmount},00</p>
        </div> */}
       
      
      <div className='prevOrders'>
            <h1>All orders</h1>
            {orders && orders.map((order) => (
                <Link to={order._id}>
                <div key={order._id} className='order-wrapper'>
                    <p className='ordernumber'><b>Ordernumber:</b> {order._id}</p>
                    <p>Status: {order.orderStatus}</p>
                    {order.orderRow.map((row) => (
                        
                        <div key={row._id} className='row-wrapper'>
                            
                            <img src={row.product.imageURL} alt={row.product.name} className='orderRowImg'/>
                            <p><b>Product:</b> {row.product.name}</p>
                            <p><b>Quantity:</b> {row.quantity}</p>
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


