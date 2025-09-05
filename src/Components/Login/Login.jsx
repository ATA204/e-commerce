import React from 'react'
import './Login.Module.css'
import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/LoginSlice'


export default function Login() {
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.login)
  const Navigate = useNavigate()
  async function handleLogin(values) {
    await dispatch(login(values))
    Navigate('/')


  }
  let validationSchema = yup.object({
    username: yup.string().required('Name is required').min(3, 'Name must be at least 3 characters').max(10, 'Name must be less than 10 characters'),
    password: yup.string().required('password is required')
  })


  let formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema,
    onSubmit: handleLogin

  })

  return <>

    <div className=" w-1/2 m-auto my-20 bg-white px-20 py-12 shadow-2xl rounded-3xl ">
      <h2 className="text-[#0AAD0A] text-3xl font-bold mb-5 RegisterTitle  ">Login Now :</h2>
      <form onSubmit={formik.handleSubmit} className="flex flex-col" >


        <label htmlFor="username" className='text-[#8f8f8f] text-[1.11rem]'>User Name "emilys"</label>
        <input type="text" name="username" id="username" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.username} className="w-full my-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0AAD0A]" />
        {(formik.errors.username && formik.touched.username) ? <p className=" mb-2 text-md text-red-600 dark:text-red-500">{formik.errors.username}</p> : null}



        <label htmlFor="password" className='text-[#8f8f8f] text-[1.11rem]'>Password "emilyspass"</label>
        <input type="password" name="password" id="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} className="w-full  my-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0AAD0A] " />
        {(formik.errors.password && formik.touched.password) ? <p className=" mb-2 text-md text-red-600 dark:text-red-500">{formik.errors.password}</p> : null}



        {!loading ? <button disabled={!(formik.isValid && formik.dirty)} type="submit" className='bg-[#198754] w-full px-5 py-2 text-white rounded-md mt-1 hover:bg-[#146c43] shadow-lg transition-all disabled:opacity-60'>Login</button> : <button type="button" className="bg-[#198754] w-full px-5 py-2 text-white rounded-md ">
          <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
          </svg>
          Loading...
        </button>}


      </form>

      <div className='flex items-center m-auto w-full mt-8 justify-center gap-2 Account'>
        <p className='text-[#212529]'>Create an Account</p>
        <Link className='underline italic hover:no-underline font-bold' to='/register'>Register</Link>
      </div>
    </div>


  </>
}
