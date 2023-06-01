import { Navigate, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard'
import useFetch from '../components/useFetch'
import { useSelector } from 'react-redux'

const Products = () => {
  const navigate = useNavigate();
  const {user} = useSelector(state => state.auth)
  if(!user) return <Navigate to='/login'/>

  const { data: products, isLoading, error } = useFetch('http://localhost:9999/api/products')

  return (
    <div className='Products'>
      <h1 className="productsTitle">Products</h1>
      <div className='add-wrap'>
      <button className='add-btn' onClick={ () => navigate('/add-product/')}>add</button>
      </div>
      
      <ul className='ProductCards-container'>
        {isLoading && <p>Loading...</p>}
        {error && <h2>{ error }</h2>}
      { products && products.map(product => (
            <ProductCard key={product._id} product={product} />
          )) }

      </ul>
    </div>
  )
}

export default Products