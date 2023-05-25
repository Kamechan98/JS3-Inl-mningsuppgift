import ProductCard from '../components/ProductCard'
import useFetch from '../components/useFetch'

const Products = () => {

  const { data: products, isLoading, error } = useFetch('http://localhost:9999/api/products')

  return (
    <div className='Products'>
      <h1 className="productsTitle">Products</h1>
      {/* Possible menu with filters, the tags we gave the products? */}
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