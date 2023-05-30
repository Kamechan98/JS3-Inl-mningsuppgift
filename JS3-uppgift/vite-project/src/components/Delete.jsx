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
    <div className='product-delete'>
        <div className='d-wrapper'>
            <h1>delete</h1>
            <p>Är du säker?</p>
            { validationError&&<p>{validationError}</p>}
            <button onClick={Delete}>Yes</button>
            <button>No</button>
        </div>
  </div>
  )
}

export default Delete