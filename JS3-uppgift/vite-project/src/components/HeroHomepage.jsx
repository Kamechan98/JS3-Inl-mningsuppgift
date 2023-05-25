import React from 'react'
import useFetch from './useFetch'
import { useNavigate } from 'react-router-dom'


const HeroHomepage = () => {

    const navigate = useNavigate()

    const { data: product} = useFetch('http://localhost:9999/api/products/645e1b2cebd7d18d50865558')
  return (
    <div className='HeroHomepage'>
        <div className="hero-container">
        <div className='cta'>
            <h1 className='hero-welcome'>Welcome to bmerketo shop</h1>
            { product && <h2>Exclusive {product.name}</h2>}
            <button onClick={ () => navigate('/products/645e1b2cebd7d18d50865558')}>Shop now</button>
        </div>
        <div className='img-container'>
            {product && <img src={product.imageURL} alt={product.name} className='hero-img'/>}
        </div>
        </div>
    </div>
  )
}

export default HeroHomepage