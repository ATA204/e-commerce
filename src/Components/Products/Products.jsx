import React, { useEffect, useMemo, useState } from 'react'
import './Products.Module.css'
import { useDispatch, useSelector } from 'react-redux'
import { myProducts } from '../../Redux/ProductsSlice'
import ReactStars from 'react-rating-stars-component';
import Loading from '../Loading/Loading';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';









export default function Products() {
  let [allproducts, setAllProducts] = useState([])



  let { myproducts, loading } = useSelector((state) => state.products)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(myProducts())

  }, [])

  return <>
    {loading ? <Loading /> : <>
      <h1 className='font-bold text-[#198754] text-4xl mx-10 py-5'>Products :</h1>
      <FeaturedProducts products={allproducts} myProducts={myproducts} /></>

    }

  </>
}
