import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { logOut } from '../store/features/auth/authSlice'

const UserProfile = () => {

  const { cart, totalAmount } = useSelector(state => state.shoppingCart)
  const { user } = useSelector(state => state.auth)
  if(!user) return <Navigate to='/login'/>
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // If user logs out using "Sign in as another user" - redirects to login
  const logoutAndNavigate = () => {
    dispatch(logOut())
    navigate('/login')
  }

  // If user logs out using logout-button in navbar while on this page - redirects to login
  useEffect(() => {
    if(!user) {
        navigate('/login')
    }
  }, [user])
  
  return (
    <div className='UserProfile'>
      <h1>Welcome back!</h1>
      <p>You are currently logged in as {user.email}</p>
      <p>Not you? <span className='link' onClick={logoutAndNavigate}>Sign in as another user here</span></p>
    </div>
  )
}

export default UserProfile