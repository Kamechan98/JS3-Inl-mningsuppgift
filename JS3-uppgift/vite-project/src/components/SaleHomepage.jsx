import React from 'react'
import useFetch from './useFetch'
import ProductCard from './ProductCard'
import SizedProductCard from './SizedProductCard'
import TextCard from './TextCard'

const SaleHomepage = ({ products }) => {

  const _products = products.slice(0,2)
  const product = _products[0]
  const product2 = _products[1]

  return (
    <div className='SaleHomepage'>
      <div className="container">
        {
          product && <SizedProductCard key={product._id} product={product} width={'369px'} height={'310px'} />
        }
        <TextCard />
        {
          product2 && <SizedProductCard key={product2._id} product={product2} width={'369px'} height={'310px'} />
        }

        {/* {
          _products &&    (
            <>
              <SizedProductCard key={_products[0]._id} product={_products[0]} width={'369px'} height={'310px'} />
              <TextCard />
              <SizedProductCard key={_products[1]._id} product={_products[1]} width={'369px'} height={'310px'} />
            </>    
          )
        } */}

      </div>
    </div>
  )
}

export default SaleHomepage