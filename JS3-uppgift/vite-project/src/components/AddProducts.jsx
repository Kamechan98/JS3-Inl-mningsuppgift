import React from 'react'
import FormInput from './FormInput'

const AddProduct = () => {
  return (
    <form noValidate className='add-form'>
    <FormInput
    id="name"
    type="text"
    label="Add Product Name*"
    // value={formData.firstName}
    // onChange={handleChange}
    // errorMsg={errors.firstName}
    />
    <FormInput
    id="description"
    type="text"
    label="Add Product Description*"
    // value={formData.lastName}
    // onChange={handleChange}
    // errorMsg={errors.lastName}
    />
    <FormInput
    id="price"
    type="number"
    label="Product Price*"
    // value={formData.street}
    // onChange={handleChange}
    // errorMsg={errors.street}
    />
    <FormInput
    id="imageURL"
    type="text"
    label="Add Image URL*"
    // value={formData.postalCode}
    // onChange={handleChange}
    // errorMsg={errors.postalCode}
    />
    <FormInput
    id="tags"
    type="text"
    label="Add tags*"
    // value={formData.city}
    // onChange={handleChange}
    // errorMsg={errors.city}
    />
    <FormInput
    id="rating"
    type="text"
    label="Add rating (optional)"
    // value={formData.mobile}
    // onChange={handleChange}
    />
    <FormInput
    id="review"
    type="text"
    label="Add review (optional)"
    // value={formData.company}
    // onChange={handleChange}
    />
    </form>
  )
}

export default AddProduct