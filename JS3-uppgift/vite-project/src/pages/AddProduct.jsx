import React from 'react'
import AddProducts from '../components/AddProducts'

const AddProduct = () => {
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