import React from 'react'
import AddProducts from '../components/AddProducts'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const AddProduct = () => {
  const {user} = useSelector(state => state.auth)
  if(!user) return <Navigate to='/login'/>
  return (
    <div className='add-wrapper'>
    <div className='add-card'>
    <p className='add-headline'>Add a product</p>
      <AddProducts />
    </div>
    </div>
  )
}

export default AddProduct