import React from 'react'
import './Wishlist.Module.css'
import { Link } from 'react-router-dom'
import {  useSelector } from 'react-redux'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'


export default function Wishlist() {
  let { wishlistItems } = useSelector((state) => state.wishlist)

return <>
    {wishlistItems?.length === 0 ? <div className='w-10/12 m-auto py-8 px-3 my-3 bg-[#F8F9FA] rounded-lg'>
      <h3 className='text-4xl font-bold px-3 after:content-[""] after:block  after:w-[170px] after:mt-1 after:h-[2px] after:bg-[#000] '>Favourites</h3>
      <div className='mt-4 mx-5 flex flex-col gap-2'>
        <p className='text-[#85888b] font-bold text-2xl italic'>Your WishList is Currently Empty</p>
        <Link to={'/'} className=' w-fit bg-[#6c757d] px-3 py-2 rounded-md text-white hover:bg-[#5c636a] transition-all'>Start Shopping</Link >
      </div>
    </div> : <div className=' m-auto py-8  my-3 bg-[#F8F9FA] rounded-lg'><h3 className='text-4xl font-bold px-5 after:content-[""]   after:block  after:w-[170px] after:mt-1 after:h-[2px] after:bg-[#000] mb-3'>Favourites</h3><FeaturedProducts myProducts={wishlistItems} /></div>}

  </>
}
