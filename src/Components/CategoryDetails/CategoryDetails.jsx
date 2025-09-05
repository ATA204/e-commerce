import React, { useEffect } from 'react'
import './CategoryDetails.Module.css'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { categoryProducts } from '../../Redux/productsCategorySlice'
import Loading from '../Loading/Loading'
import { FaRegHeart } from 'react-icons/fa'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'




export default function CategoryDetails() {

  let { category } = useParams()
  let { allcategoryProducts, loading } = useSelector((state) => state.categoryProducts)
  let dispatch = useDispatch()






useEffect(() => {
  dispatch(categoryProducts(category))
}, [])
return <> {loading ? <Loading /> : <> <h1 className='font-bold text-[#198754] text-4xl mx-10 py-5'>{category}</h1>
  <FeaturedProducts myProducts={allcategoryProducts} />
</>
}



</>
}
