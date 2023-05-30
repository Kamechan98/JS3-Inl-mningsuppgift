import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import FormInput from './FormInput'
import { validateProduct } from '../helpers/validateProduct'
import { useSelector } from 'react-redux'

const AddProduct = () => {

  const [errors, setErrors] = useState({})
  const [validationError, setValidationError] = useState(null)
  const navigate = useNavigate();
  const {user} = useSelector(state => state.auth)
  if(!user) return <Navigate to='/login'/>

  const handleChange = e => {
    const { id, value } = e.target
    setformData(form => {
      return {
        ...form,
        [id]: value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!validateProduct(formData, setErrors)) return

    const res = await fetch ('http://localhost:9999/api/products', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: 'Bearer ' + user //Lägg till token
      },
      body: JSON.stringify(formData)
    })
    
    
    if(res.status === 201) navigate('/products')

    if(res.status === 401)setValidationError('You need to be ADMIN in order to post')  
  }

  const [formData, setformData] = useState({
    name: '',
    description: '',
    price: '',
    imageURL: '',
    // tags: '',
    rating: '',
    review: ''
  })

  return (
    <form noValidate onSubmit={handleSubmit} className='add-form'>
    <FormInput
    id="name"
    type="text"
    label="Add Product Name*"
    value={formData.name}
    onChange={handleChange}
    errorMsg={errors.name}
    />
    <FormInput
    id="description"
    type="text"
    label="Add Product Description*"
    value={formData.description}
    onChange={handleChange}
    errorMsg={errors.description}
    />
    <FormInput
    id="price"
    type="number"
    label="Product Price*"
    value={formData.price}
    onChange={handleChange}
    errorMsg={errors.price}
    />
    <FormInput
    id="imageURL"
    type="text"
    label="Add Image URL*"
    value={formData.imageURL}
    onChange={handleChange}
    errorMsg={errors.imageURL}
    />
    {/* <FormInput
    id="tags"
    type="text"
    label="Add tags*"
    value={formData.tags}
    onChange={handleChange}
    errorMsg={errors.tags}
    /> */}
    <FormInput
    id="rating"
    type="text"
    label="Add rating (optional)"
    value={formData.rating}
    onChange={handleChange}
    />
    <FormInput
    id="review"
    type="text"
    label="Add review (optional)"
    value={formData.review}
    onChange={handleChange}
    />
    {validationError && <p className='validation-error'> {validationError} </p>}
    <button className='login-btn'>Submit</button>
    </form>
  )
}

export default AddProduct