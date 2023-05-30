import React from 'react'
import Delete from '../components/Delete'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const DeleteProduct = () => {
    const {user} = useSelector(state => state.auth)
    if(!user) return <Navigate to='/login'/>
  return (
    <div>
    <Delete/>
    </div>
  )
}

export default DeleteProduct