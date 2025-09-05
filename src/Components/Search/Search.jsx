import React, { useMemo, useState } from 'react'
import './Search.Module.css'
import { useDispatch, useSelector } from 'react-redux'
import { searchProducts } from '../../Redux/SearchSlice'
import Loading from '../Loading/Loading'
import { Link } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component';
import { FaRegHeart } from 'react-icons/fa'
import { myProducts } from '../../Redux/ProductsSlice'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'



export default function Search() {

  let [searchKey, setSearchKey] = useState('')
  let { allsearchProducts, loading } = useSelector((state) => state.search)
  let dispatch = useDispatch()


  useMemo(async () => {
     dispatch(searchProducts(searchKey))

  }, [searchKey])



  return <> <div className='my-3 w-full h-full m-auto flex justify-center '>

    <input type="text" className='w-8/12 mx-auto py-2 px-3 rounded-md border border-gray-300  focus:outline-none focus:ring-1 focus:ring-[#0AAD0A]' placeholder='Search For Products' onChange={(e) => setSearchKey(e.target.value.trim())} />
  </div>

    {loading ? <Loading /> : <>{allsearchProducts?.length !== 0 ? <div> <h1 className='font-bold text-[#198754] text-4xl mx-10 py-5'>Products :</h1>
      <FeaturedProducts myProducts={allsearchProducts} />
    </div> : <div> <h1 className='font-bold text-[#85888b] text-4xl mx-10 text-center py-5'>No Products Found</h1></div>}
    </>
    }

  </>

}
