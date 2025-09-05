import React, { useEffect, useState } from 'react'
import './NavBar.Module.css'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/LoginSlice';






export default function NavBar({ logout }) {
  let { decodedData } = useSelector((state) => state.login)

  useEffect(() => {

  }, [decodedData])

  return <>
    <nav className="static bg-[#F8F9FA]-800 shadow-sm">
      <div className="mx-auto max-w-10xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button type="button" command="--toggle" commandfor="mobile-menu" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open main menu</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 in-aria-expanded:hidden">
                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 not-in-aria-expanded:hidden">
                <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">


              <Link className='flex gap-1 items-center' to='/'> <svg className='mx-2' xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path fill="#00d696" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
                <span className='text-xl font-bold'>Online Bazzar</span></Link>


            </div>
            {(decodedData !== null || localStorage.getItem('dataToken') !== null) ? <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" --> */}
                <Link to="/" aria-current="page" className="rounded-md px-3 py-2 font-medium text-black text-[1.1rem] hover:shadow-sm hover:bg-gray-100">Home</Link>
                <Link to="products" className="rounded-md px-3 py-2  font-medium text-black text-[1.1rem] hover:shadow-sm hover:bg-gray-100">Produts</Link>
                <Link to="categories" className="rounded-md px-3 py-2  font-medium text-black text-[1.1rem]  hover:shadow-sm hover:bg-gray-100 ">Categories</Link>
                <Link to="search" className="rounded-md px-3 py-2 font-medium text-black text-[1.1rem]  flex items-center gap-2 hover:shadow-sm hover:bg-gray-100"><CiSearch />Search</Link>
                <Link to="cart" className="rounded-md px-3 py-2  font-medium text-black text-[1.1rem]  flex items-center hover:shadow-sm hover:bg-gray-100 "><FaShoppingCart /></Link>
                <Link to="wishlist" className="rounded-md px-3 py-2  font-medium text-black text-[1.1rem]  flex items-center hover:shadow-sm hover:bg-gray-100"><FaHeart /></Link>
              </div>
            </div> : null}
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link to="https://www.facebook.com/mohamed.mahmoud.ata.2025" target='_blank' aria-current="page" className="rounded-md px-3 py-2 text-[1.12] font-medium text-black  flex items-center hover:shadow-sm hover:bg-gray-100 "><FaFacebook /></Link>
            <Link to="https://www.linkedin.com/in/mohamed-ata-1102442b5/" target='_blank' aria-current="page" className="rounded-md px-3 py-2 text-[1.12] font-medium text-black  flex items-center hover:shadow-sm hover:bg-gray-100 "><FaLinkedin /></Link>
            <Link to="https://github.com/ATA204" target='_blank' aria-current="page" className="rounded-md px-3 py-2 text-[1.12] font-medium text-black  flex items-center hover:shadow-sm hover:bg-gray-100 "><FaGithub /></Link>
            {(decodedData !== null || localStorage.getItem('dataToken') !== null) ? <span to="" aria-current="page" className="rounded-md px-3 py-2 text-[1.12] font-medium text-black   hover:shadow-sm hover:bg-gray-100 cursor-pointer" onClick={logout}>Signout</span> : <>
              <Link to="login" aria-current="page" className="rounded-md px-3 py-2 text-[1.12] font-medium text-black  hover:shadow-sm hover:bg-gray-100">Login</Link>
              <Link to="register" aria-current="page" className="rounded-md px-3 py-2 text-[1.12] font-medium text-black  hover:shadow-sm hover:bg-gray-100">Register</Link>
            </>}

          </div>
        </div>
      </div>

      <el-disclosure id="mobile-menu" hidden className="block sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" --> */}
          <Link to="#" aria-current="page" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white">Dashboard</Link>
          <Link to="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Team</Link>
          <Link to="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Projects</Link>
          <Link to="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Calendar</Link>
        </div>
      </el-disclosure>
    </nav>
  </>
}
