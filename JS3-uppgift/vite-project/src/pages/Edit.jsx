import React from 'react'
import EditProduct from '../components/EditProduct'
import useFetch from '../components/useFetch'
import { Navigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Edit = () => {
  const {id} = useParams()
  const { data: product } = useFetch('http://localhost:9999/api/products/' + id)
  const {user} = useSelector(state => state.auth)
  if(!user) return <Navigate to='/login'/>

  return (
    <div className='add-wrapper'>
    <div className='add-card'>
    <p className='add-headline'>Add a product</p>
     { product&& <EditProduct product = {product} id = {id}/>}
    </div>
    </div>
  )
}

export default Edit