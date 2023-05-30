import React from 'react'
import useFetch from '../components/useFetch'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'

const Delete = () => {

    const navigate = useNavigate();
    const {user} = useSelector(state => state.auth)

    const { id } = useParams()
    const [validationError, setValidationError] = useState(null)

    const Delete = async (e) => {
    
        const res = await fetch ('http://localhost:9999/api/products/' + id, {
          method: 'DELETE',
          headers: {
            authorization: 'Bearer ' + user 
          }
        })
        
        
        if(res.status === 200) navigate('/products')
    
        if(res.status === 401)setValidationError('You need to be ADMIN in order to access')  
      }

  return (
    <div className='p-delete'>
       
        <div className='d-card'>
          <h2 className='d-headline'>Are you sure you wanna delete this product?</h2>
            <p className='d-underline'>This action cannot be reversed</p>
            { validationError&&<p>{validationError}</p>}
            <div className='confirm'>
            <button onClick={Delete}>Yes</button>
            <button onClick={ () => navigate('/products/')}>No</button>
            </div>
        </div>
  </div>
  )
}

export default Delete