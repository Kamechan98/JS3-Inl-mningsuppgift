import React, { useState } from 'react'
import FormInput from './FormInput'
import { useDispatch } from 'react-redux'
import { validateReg } from '../helpers/validateReg'
import { registerUser } from '../store/features/auth/authSlice'
import { useNavigate } from 'react-router-dom'

const RegForm = () => {

  const [errors, setErrors] = useState({})

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    street: '',
    postalcode: '',
    city: '',
    mobile: '',
    company: '',
    email: '',
    password: '',
    confirmPswrd: '',
    profileImg: ''
  })

  const handleChange = e => {
    const { id, value } = e.target
    setFormData(form => {
      return {
        ...form,
        [id]: value
      }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    // if(!validateReg(formData, setErrors)){
    //   return
    // }

    dispatch(registerUser(formData))
    navigate("/")
  }

  return (
    <form noValidate onSubmit={handleSubmit}>
    <FormInput
    id="firstName"
    type="text"
    label="First Name*"
    value={formData.firstName}
    onChange={handleChange}
    errorMsg={errors.firstName}
    />
    <FormInput
    id="lastName"
    type="text"
    label="Last Name*"
    value={formData.lastName}
    onChange={handleChange}
    errorMsg={errors.lastName}
    />
    <FormInput
    id="street"
    type="text"
    label="Street Name*"
    value={formData.street}
    onChange={handleChange}
    errorMsg={errors.street}
    />
    <FormInput
    id="postalCode"
    type="number"
    label="Postal Code*"
    value={formData.postalCode}
    onChange={handleChange}
    errorMsg={errors.postalCode}
    />
    <FormInput
    id="city"
    type="text"
    label="City*"
    value={formData.city}
    onChange={handleChange}
    errorMsg={errors.city}
    />
    <FormInput
    id="mobile"
    type="number"
    label="Mobile (optional)"
    value={formData.mobile}
    onChange={handleChange}
    />
    <FormInput
    id="company"
    type="text"
    label="Company (optional)"
    value={formData.company}
    onChange={handleChange}
    />
    <FormInput
    id="email"
    type="email"
    label="Email*"
    value={formData.email}
    onChange={handleChange}
    errorMsg={errors.email}/>
    <FormInput
    id="password"
    type="password"
    label="Password*"
    value={formData.password}
    onChange={handleChange}
    errorMsg={errors.password}
    />
    <FormInput
    id="confirmPswrd"
    type="password"
    label="Confirm Password*"
    value={formData.confirmPswrd}
    onChange={handleChange}
    errorMsg={errors.confirmPswrd}
    />
    <FormInput
    id="profileImg"
    type="text"
    label="Upload Profile Image (optional)"
    value={formData.profileImg}
    onChange={handleChange}/>
    <input type="checkbox" id='reg-checkbox'/> 
    <label className='checkbox-label' htmlFor="checkbox">i have read and accept terms and agreements</label>
    <button className='login-btn'>Submit</button>
    {/* <p>{JSON.stringify(formData, '', 1)}</p> */}
    </form>
  )
}

export default RegForm