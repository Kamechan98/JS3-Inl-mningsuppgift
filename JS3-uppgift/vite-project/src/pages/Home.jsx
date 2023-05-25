import { useEffect, useState } from 'react'
import HeroHomepage from '../components/HeroHomepage'
import Subscribe from '../components/Subscribe'
import SaleHomepage from '../components/SaleHomepage'
import TopHomepage from '../components/TopHomepage'
import CollectionHomePage from '../components/CollectionHomePage'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../store/features/products/productsSlice'

const Home = () => {

  const dispatch = useDispatch()
  const { products, error, loading } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  return (
    <div>
      <HeroHomepage/>
      <CollectionHomePage/>
      <SaleHomepage products={products} />
      <TopHomepage products={products} />
      <Subscribe/>
    </div>
  )
}

export default Home