import React from 'react'
import heroBanner from '../assets/Placeholders/1920x300.svg'
import { FaStar } from 'react-icons/fa'
import { MdOutlineAddShoppingCart } from "react-icons/md"
import useFetch from '../components/useFetch'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { useDispatch } from 'react-redux'
import { addToCart, removeOne } from '../store/features/shoppingCart/shoppingCartSlice'
import { useState } from 'react'
import { useSelector } from 'react-redux'


const ProductDetails = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const {user} = useSelector(state => state.auth)
  if(!user) return <Navigate to='/login'/>
  

  const { data: product } = useFetch('http://localhost:9999/api/products/' + id)

  const { data: products } = useFetch('http://localhost:9999/api/products/')

  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(0);
  

  const addProductToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
    setQuantity(0); 
  };


  const renderStarRating = () => {
    const filledStars = Math.round(product.rating);
    const totalStars = 5;
    const starArray = [];

    for (let i = 0; i < totalStars; i++) {
      if (i < filledStars) {
        starArray.push(<span className="gold-star" key={i}><FaStar /></span>);
      } else {
        starArray.push(<span className="gray-star" key={i}><FaStar /></span>);
      }

    }

    return starArray;
  };

  if (!product) {
    return <div>Loading...</div>;
  }



  

  return (
    <div className='product-details'>

      <img src={heroBanner} alt="" />



      <div className='product-detail-top'>

        <img src={product.imageURL} alt="" width={501} height={430} />

        <div className='product-description'>


          <h4>{product.name}</h4>
          <p className='description'>{product.description}</p>
          <hr></hr>


          <div className='star-rating'>
            {renderStarRating()}
            <span className='rating-text'>({product.review ? '1 Review' : 'No Reviews'})</span>
          </div>

          <div className='price'>{'$' + product.price}</div>
         

          <form className='quantity-form' onSubmit={e => e.preventDefault()}>

            <div>
              <input type="button" value="-" className='plus'  onClick={() => setQuantity(quantity - 1)}/>
              <input type="number" className='qty-text' value={quantity}  onChange={(e) => setQuantity(parseInt(e.target.value))}/>
              <input type="button" value="+" className='plus'  onClick={() => setQuantity(quantity + 1)} />
            </div>
            <button type='submit' className='addTo-cart-btn' onClick={addProductToCart}>Add to Cart<MdOutlineAddShoppingCart className='shopping-cart-icon' /></button>
            
          </form>
          <div className='btns'>
              <Link className='delete' to={'/delete-product/' + id} >X</Link>
              <Link className='edit' to={'/edit-product/' + id} >EDIT</Link>
          </div>



          <ul className='color-variation'>
            <li ><a href="#"></a><span className='red'></span></li>
            <li ><a href="#"></a><span className='yellow'></span></li>
            <li ><a href="#"></a><span className='babyBlue'></span></li>
            <li>SKU: N/A</li>
          </ul>

          <button className='wish-btn'>Add to wishlist</button>

          <p>Category: {product.tags.join(', ')}</p>

        </div>


      </div>

      <div className='product-detail-bottom'>
        <ul className='nav-tabs'>
          <li className='nav-item'><a href="#" className='nav-link'>DESCRIPTION</a></li>
          <li className='nav-item'><a href="#" className='nav-link'>ADDITIONAL INFO</a></li>
          <li className='nav-item'><a href="#" className='nav-link'>REVIEWS ({product.review ? '1 Review' : 'No Reviews'})</a></li>
          <li className='nav-item'><a href="#" className='nav-link'>SHIPPING & DELIVERY</a></li>
        </ul>

        <div className='tab-content'>
          <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, velit.</h4>
          <div className='tab-row'>
            <div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium odio aspernatur provident magnam quo a aut. Nostrum voluptatibus, recusandae obcaecati numquam ab exercitationem sunt sit tenetur tempora. Corporis, voluptate. Molestiae itaque ad quo dolore perspiciatis. Repellat incidunt ipsa facilis! Tempore.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque incidunt tempore molestiae neque delectus laborum accusamus mollitia inventore. Architecto quidem omnis asperiores sint! Molestias velit quae ratione voluptatibus laborum reiciendis rerum officiis, deleniti accusamus repellat, minus quam, nam culpa aliquid consectetur officia quasi in ex vel. Ipsum perspiciatis laboriosam nemo.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cumque ex minus quidem mollitia, voluptates quod dicta deleniti ratione ab dignissimos, nisi nihil non fuga consequuntur molestiae, optio at distinctio.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, sunt optio sed quis impedit est dignissimos at similique mollitia maiores provident modi iste consectetur quia sint. Rem ea vitae facilis ut quae unde vel consequatur. Totam placeat, excepturi ducimus et ipsa nostrum in reiciendis ex magni, rerum adipisci atque neque.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quis natus velit perspiciatis inventore corporis consequatur magni exercitationem alias eos labore aliquam illo quia suscipit minus ad totam voluptatibus, ex doloribus impedit voluptatum odit! Consequuntur, debitis a. Delectus, nisi quidem.</p>
            </div>
            <img src={product.imageURL} alt="" width={469} height={356} />
          </div>

        </div>

        <hr />

        <h4 className='rp-h4'>Related Products</h4>
        <section className='recent-products'>

          {products && products.slice(0, 4).map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </section>






      </div>

    </div>
  )
}

export default ProductDetails