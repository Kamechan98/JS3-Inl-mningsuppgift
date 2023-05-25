import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SizedProductCard = ({ product, width, height }) => {

  return (
    <Link to={`/products/${product._id}`} className='SizedProductCard' style={{ width: width,}}>
      <img src={product.imageURL} alt={product.name} style={
        {
          width: width,
          height: height
        }
      } />
      <div className="product-details">
        <h3 className='product-name'>{product.name}</h3>
        <div className='d-flex-between'>
          <p className={product.reducedPrice ? 'original-price' : 'product-price'}>${product.price}.00</p>
          { product.reducedPrice && <p className='product-price'>${product.reducedPrice}.00</p> }
          <span className='icon'><FaShoppingCart /></span>
        </div>
      </div>
    </Link>
  )
}

export default SizedProductCard