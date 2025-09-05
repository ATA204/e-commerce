import React, { useEffect, useMemo, useState } from 'react'
import './FeaturedProducts.Module.css'
import { Link } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";
import PriceCalc from '../priceCalc/PriceCalc';
import { addtoCart } from '../../Redux/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { handleWishlist } from '../../Redux/WishlistSlice';
import { FaHeart } from "react-icons/fa";




export default function FeaturedProducts({ myProducts }) {
  let dispatch = useDispatch()
  let { wishlistItems } = useSelector((state) => state.wishlist)




  return <>

    <div className="grid xl:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 w-11/12 m-auto  cursor-pointer gap-y-2 py-2 bg-[#F8F9FA]">
      {myProducts?.map((product) => <div key={product.id} className='w-11/12 m-auto'>
        <div className="w-full py-5 px-4 rounded-md bg-white shadow-lg hover:shadow-2xl transition-all ">
          <div className="Product">
            <Link to={`/productdetails/${product.id}`}>

              <img src={product.thumbnail} className='xl:w-full md:w-3/4 sm:w-1/2 mx-auto' alt="product image" />
              <p className='text-[#0AAD0A]'>{product.category}</p>

              <h2 className='font-bold'>{product.title.split(' ').slice(0, 2).join(' ')}</h2>
              {/* <ReactStars {...Ratings} value={product.rating} /> */}
              <div className="flex items-center gap-3 my-1" >
                <p className='text-red-600  line-through text-sm'>${product.price}</p>
                <PriceCalc product={product} />

              </div>

            </Link>
            <div className='flex items-center justify-between mt-2 gap-2'>
              <button className=' AddBtn  bg-[#198754] text-white px-5 py-2 rounded-md w-9/12' onClick={() => dispatch(addtoCart(product))}>Add to Cart</button>


              <div className='w-3/12 flex items-center justify-center bg-[#E2E3E5] px-2 py-2 rounded-sm ' onClick={() => dispatch(handleWishlist(product))}>
                {wishlistItems?.some((item) => item.id === product.id) ? <FaHeart className='w-full' /> : <FaRegHeart className='w-full ' />}

              </div>
            </div>

          </div>

        </div>
      </div>)}

    </div >
  </>
}
