import React, { useEffect } from 'react'
import './Categories.Module.css'
import { useDispatch, useSelector } from 'react-redux'
import { myCategories } from '../../Redux/categorySlice'
import Loading from '../Loading/Loading'
import { Link } from 'react-router-dom'


export default function Categories() {
  let { categories, loading, error } = useSelector(state => state.categories)
  let dispatch = useDispatch()


  useEffect(() => {
    dispatch(myCategories())
  }, [])
  return <>
    {loading ? <Loading /> : <div className='w-7/12 mx-auto my-10 px-3 py-5'>
      <div className='grid lg:grid-cols-3 gap-3 md:grid-cols-2 sm:grid-cols-1'>

        {categories.map((category) => <div key={category.slug} className='py-2 px-5 text-center shadow-2xl rounded-lg text-[#212529] cursor-pointer bg-[#d7d7d7]'>
          <Link to={`/categorydetails/${category.slug}`}>
            <h3 className='font-bold text-xl'>{category?.name}</h3>
          </Link>
        </div>)}
      </div>
    </div>}

  </>
}
