import React, { useEffect } from 'react'
import FormInput from './FormInput'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { validateLogin } from '../helpers/validateLogin'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../store/features/auth/authSlice'
// import { Link } from 'react-router-dom'

const LoginForm = () => {
  
  const [errors, setErrors] = useState({})
  const { user } = useSelector(state => state.auth)

  const [submitted, setSubmitted] = useState(false)

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [formData, setFormData,] = useState({
      email: '',
      password: ''
    })
  
    const handleChange = e => {
      const { id, value } = e.target
      setFormData(formData => {
        return {
          ...formData,
          [id]: value
        }
      })
    }

  
    const handleSubmit = async e => {
      e.preventDefault()

      if(!validateLogin(formData, setErrors)){
        return
      }
      
      await dispatch(loginUser(formData))
      setSubmitted(true)

    }
    
    useEffect(() => {
      if(user !== null){
        navigate("/user")
      } 
      
    }, [ submitted, user])
  
  
    return (
      <form noValidate onSubmit={handleSubmit}>
      <FormInput
      id="email"
      type="email"
      label="Email*"
      value={formData.email}
      onChange={handleChange}
      errorMsg={errors.email}
      />
      <FormInput
      id="password"
      type="password"
      label="Password*"
      value={formData.password}
      onChange={handleChange}
      errorMsg={errors.password}
      />
      <div className="checkbox-login">
      <input type="checkbox" id='checkbox'/> 
      <label className='checkbox-label' htmlFor="checkbox">please keep me logged in</label>
      </div>
      <button className='login-btn'>Submit</button>
      </form>
    )
}

export default LoginForm