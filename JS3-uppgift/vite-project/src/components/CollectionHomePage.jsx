import React from 'react'
import ProductCard from '../components/ProductCard';
import useFetch from '../components/useFetch'
import { useState } from 'react'
import { AiOutlineReload } from "react-icons/ai";

const CollectionHomePage = () => {

    const { data: products } = useFetch('http://localhost:9999/api/products/')

    const [loadProducts, setLoadProducts] = useState(6)

    const loadMore = () => {
        setLoadProducts(loadProducts + loadProducts)
    }


    return (
        <div className='product-collection'>
            <h2 className='h2-collection'>Best Collection</h2>

            <div className='row'>
                <ul className='nav-tabs'>
                    <li className='nav-item'><a href="#" className='nav-link'>All /</a></li>
                    <li className='nav-item'><a href="#" className='nav-link'>Bags /</a></li>
                    <li className='nav-item'><a href="#" className='nav-link'>Dress /</a></li>
                    <li className='nav-item'><a href="#" className='nav-link'>Decoration /</a></li>
                    <li className='nav-item'><a href="#" className='nav-link'>Essentials /</a></li>
                    <li className='nav-item'><a href="#" className='nav-link'>Interior /</a></li>
                    <li className='nav-item'><a href="#" className='nav-link'>Laptop /</a></li>
                    <li className='nav-item'><a href="#" className='nav-link'>Mobile /</a></li>
                    <li className='nav-item'><a href="#" className='nav-link'>Beauty /</a></li>
                </ul>
            </div>

            <section>
                {products && products.slice(0, loadProducts).map((product) => (
                    <ProductCard key={product._id} product={product} />

                ))}

            </section>

            <div className='load-more'>
                <button className='load-btn' onClick={() => loadMore()}>Load more<span className='load-icon'><AiOutlineReload/></span></button>
            </div>
        </div>
    )
}

export default CollectionHomePage