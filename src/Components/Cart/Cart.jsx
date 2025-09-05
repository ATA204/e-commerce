import React, { useEffect } from 'react'
import './Cart.Module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addtoCart, clearCart, decreaseCart, handleTotalPrice, removeCart } from '../../Redux/CartSlice'
import PriceCalc from '../priceCalc/PriceCalc'

export default function Cart() {


  let { cartItems, TotalPrice, finalPrices } = useSelector(state => state.cart)
  const dispatch = useDispatch()


  useEffect(() => {
dispatch(handleTotalPrice())
console.log(finalPrices);

  }, [cartItems, dispatch])


  return <>

    {cartItems?.length === 0 ? <div className='w-10/12 m-auto py-8 px-3 my-3 bg-[#F8F9FA] rounded-lg'>
      <h3 className='text-4xl font-bold px-3 after:content-[""] after:block  after:w-[85px] after:mt-1 after:h-[2px] after:bg-[#000] '>Cart</h3>
      <div className='mt-4 mx-5 flex flex-col gap-2'>
        <p className='text-[#85888b] font-bold text-2xl italic'>Your Cart is Currently Empty</p>
        <Link to={'/'} className=' w-fit bg-[#6c757d] px-3 py-2 rounded-md text-white hover:bg-[#5c636a] transition-all'>Start Shopping</Link >
      </div>
    </div> : <div className='w-10/12 m-auto py-8 px-3 my-3 bg-[#F8F9FA] rounded-lg'><h3 className='text-4xl font-bold px-3 after:content-[""]   after:block  after:w-[85px] after:mt-1 after:h-[2px] after:bg-[#000] '>Cart</h3>
      <div>
        <div className="flex flex-col items-start my-5 px-4 after:content[''] after:block after:w-full after:h-[1px] after:my-3 after:bg-[gray]">
          <div className='flex items-center gap-3  '>
            <h5 className='text-xl font-bold '>Total Price is : </h5>
            <h5 className='text-[#0AAD0A] text-xl font-bold'>{`$ ${TotalPrice.toFixed(2)}`}</h5>
          </div>
          <button className='px-3 py-2 text-black bg-[#FFCA2C] my-2 rounded-md'>Purchase</button>
        </div>
        {cartItems?.map((product) => <div key={product.id} className="px-4 after:content[''] after:block after:w-full after:h-[1px] after:my-3 after:bg-[gray]" >



          <div className='flex justify-between items-center my-3  '>
            <div className='w-8/12 flex  gap-2 after '>
              <img src={product.thumbnail} className='w-2/12 object-contain' alt="product image" />
              <div className='flex flex-col  justify-start'>
                <h4 className='text-lg text-[#0AAD0A] '>{product.category}</h4>
                <h2 className='font-bold text-lg'>{product.title.split(' ').slice(0, 2).join(' ')}</h2>
                <div className="rating"></div>
                <span className='flex items-center gap-1'><p className='font-bold text-[#212529bf] italic'>Price : </p><span className='text-[#0AAD0A]'> <PriceCalc product={product} /></span></span>
                {/* Display product total from finalPrices by matching id */}
                {(() => {
                  const productFinal = finalPrices?.find(p => p.id === product.id);
                  return (
                    <span className='flex items-center gap-1'>
                      <p className='font-bold text-[#212529bf] italic'>Total : </p>
                      <span className='text-[#0AAD0A] font-bold text-sm'>
                        {productFinal ? `$ ${productFinal.total.toFixed(2)}` : ''}
                      </span>
                    </span>
                  );
                })()}
              </div>
            </div>
            <div className='w-4/12'>
              <div className='flex flex-col items-center px-3 gap-6 '>
                <div className='flex items-center justify-end gap-5'>
                  <button className='px-3 py-2 rounded-md border border-[gray] hover:bg-[gray] hover:text-white tramsition-all' onClick={() => dispatch(addtoCart(product))}>+</button>
                  <div className=''>{product.quantity}</div>
                  <button className='px-3 py-2 rounded-md border border-[gray] hover:bg-[gray] hover:text-white tramsition-all' onClick={() => dispatch(decreaseCart(product))}>-</button>
                </div>
                <div><button className='px-4 py-1 rounded-md border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all' onClick={() => dispatch(removeCart(product))}>Remove</button>
                </div>
              </div>
            </div>
          </div>


        </div>)

        }
        <div className="px-5 my-5"><button onClick={() => dispatch(clearCart())} className="bg-[#dc3545] px-3 py-2 rounded-md text-white hover:bg-[#bb2d3b] transition-all ">Clear cart</button></div>
      </div>

    </div>}





  </>
}
