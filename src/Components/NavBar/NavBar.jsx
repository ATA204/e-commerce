import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useSelector } from 'react-redux';



const navigation = [
  { name: 'Home', to: '/', current: true },
  { name: 'Products', to: '/products', current: false },
  { name: 'Category', to: '/categories', current: false },
  { name: 'Search', to: '/search', current: false },
  { name: <FaShoppingCart />, to: '/cart', current: false },
  { name: <FaHeart />, to: '/wishlist', current: false },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar({ logout }) {

  let { decodedData } = useSelector((state) => state.login)
  return (
    <Disclosure as="nav" className="static  bg-[#F8F9FA]-800 shadow-sm">
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-black hover:shadow-sm hover:bg-gray-100  focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link className='flex gap-1 items-center' to='/'> <svg className='mx-2' xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path fill="#00d696" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
                <span className='text-xl font-bold'>Online Bazzar</span></Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex gap-2 items-center">

                {(decodedData !== null || localStorage.getItem('dataToken') !== null) ?
                  <> {navigation.map((item) => (
                    <Link className="rounded-md px-3 py-2 font-medium text-black text-md hover:shadow-sm hover:bg-gray-100"
                      key={item.name}
                      to={item.to}
                      aria-current={item.current ? 'page' : undefined}

                    >
                      {item.name}
                    </Link>


                  ))}</> : null
                }


              </div>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex gap-2 items-center">
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 ">
                <Link to="https://www.linkedin.com/in/mohamed-ata-1102442b5/" target='_blank' aria-current="page" className="rounded-md px-3 py-2 text-[1.12] font-medium text-black  flex items-center hover:shadow-sm hover:bg-gray-100 "><FaLinkedin /></Link>
                <Link to="https://github.com/ATA204" target='_blank' aria-current="page" className="rounded-md px-3 py-2 text-[1.12] font-medium text-black  flex items-center hover:shadow-sm hover:bg-gray-100 "><FaGithub /></Link>
                {(decodedData !== null || localStorage.getItem('dataToken') !== null) ? <span to="" aria-current="page" className="rounded-md px-3 py-2 text-md font-medium text-black   hover:shadow-sm hover:bg-gray-100 cursor-pointer" onClick={logout}>Signout</span> : <>
                  <Link to="login" aria-current="page" className="rounded-md px-3 py-2 text-md font-medium text-black  hover:shadow-sm hover:bg-gray-100">Login</Link>
                  <Link to="register" aria-current="page" className="rounded-md px-3 py-2 text-md font-medium text-black  hover:shadow-sm hover:bg-gray-100">Register</Link></>}

              </div>

            </div>
          </div>

        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              as="a"
              to={item.to}
              aria-current={item.current ? 'page' : undefined}
              className="rounded-md px-3 py-2 font-medium text-black text-md hover:shadow-sm hover:bg-gray-100 block"
            >
              {item.name}
            </Link>




          ))}
          <Link to="https://www.linkedin.com/in/mohamed-ata-1102442b5/" target='_blank' aria-current="page" className="rounded-md px-3 py-2 text-[1.12] font-medium text-black  flex items-center hover:shadow-sm hover:bg-gray-100 "><FaLinkedin /></Link>
          <Link to="https://github.com/ATA204" target='_blank' aria-current="page" className="rounded-md px-3 py-2 text-[1.12] font-medium text-black   items-center hover:shadow-sm hover:bg-gray-100 block "><FaGithub /></Link>
          {(decodedData !== null || localStorage.getItem('dataToken') !== null) ? <span to="" aria-current="page" className="rounded-md px-3 py-2 text-md font-medium text-black   hover:shadow-sm hover:bg-gray-100 cursor-pointer block" onClick={logout}>Signout</span> : <>
            <Link to="login" aria-current="page" className="rounded-md px-3 py-2 text-md font-medium text-black  hover:shadow-sm hover:bg-gray-100">Login</Link>
            <Link to="register" aria-current="page" className="rounded-md px-3 py-2 text-md font-medium text-black  hover:shadow-sm hover:bg-gray-100 block">Register</Link></>}


        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
