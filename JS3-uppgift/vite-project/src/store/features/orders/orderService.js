// const getOrderAsync = async (userId) => {
//     const res = await fetch('http://localhost:9999/api/orders/user/' + userId)
//     if(!res.ok) throw new Error('Something went wrong')
//     return res.json()
// }

const getAllOrdersAsync = async () => {
  const res = await fetch('http://localhost:9999/api/orders/')
  if(!res.ok) throw new Error('Something went wrong')
  return res.json()
}

const getOrderByIdAsync = async () => {
  const res = await fetch('http://localhost:9999/api/orders/' + id)
  if(!res.ok) throw new Error('Something went wrong')
  return res.json()
}


const createOrderAsync = async (orderData) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    
      body: JSON.stringify(orderData),
    };
  
    const res = await fetch('http://localhost:9999/api/orders', options);
    console.log(res);
    if (!res.ok) {
      throw new Error('Something went wrong');
    }
  
    return res.json();
  };


const orderService = {
getAllOrdersAsync,
createOrderAsync,
getOrderByIdAsync
    
}

export default orderService

