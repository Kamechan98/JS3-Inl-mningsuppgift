import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <div className='login-wrapper'>
    <div className='login-card'>
      <p className='login-headline'>Please Login to your account</p>
      <p className='login-link'>Don't have an account? <Link to="/registration">Sign up here</Link></p>
      <LoginForm />
    </div>
    </div>
  )
}

export default Login