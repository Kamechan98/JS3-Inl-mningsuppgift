import { NavLink } from 'react-router-dom'
const ProductCard = ({ product }) => {

  return (

    <NavLink to={`/products/${product._id}` }>
    <li className='ProductCard'>
      <img src={product.imageURL} alt={product.name} className='ProductCard-img' />
      <h2 className='productName'>{product.name}</h2>
      <p className='productPrice'>{"$" + product.price}</p>
    </li>
     </NavLink>
  )
}

export default ProductCard