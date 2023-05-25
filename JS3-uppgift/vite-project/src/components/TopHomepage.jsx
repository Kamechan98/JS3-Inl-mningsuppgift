import React, { useState } from 'react'
import SizedProductCard from './SizedProductCard'
import useFetch from './useFetch'

const TopHomepage = ({ products }) => {

  const [firstProduct, setFirstProduct] = useState(0)
  const [productCounter, setProductCounter] = useState(6)

  const nextProducts = () => {

    if(productCounter === 12) {
      return
    }

    setFirstProduct(productCounter )
    setProductCounter(productCounter * 2)

  }

  const prevProducts = () => {
    if (firstProduct <= 5) {
      return
    }
    setFirstProduct(firstProduct - 6)
    setProductCounter(productCounter - 6)
  }

  return (
    <div className='TopHomepage'>
        <h2 className='headline'>Top selling products in this week</h2>
      <div className="container">
        {products && products.slice(firstProduct, productCounter).map((product) => (
              <SizedProductCard key={product._id} product={product} width={'270px'} height={'295px'} />
            ))}
      </div>
      <div className="buttons">
        <button className="btn" onClick={() => prevProducts()}>&lt;</button>
        <button className="btn" onClick={() => nextProducts()}>&gt;</button>
      </div>
    </div>
  )
}

export default TopHomepage