import React, { useEffect } from 'react'
import './Layout.Module.css'
import NavBar from '../NavBar/NavBar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'



export default function Layout() {
  let token = localStorage.getItem('dataToken')
  const Navigate = useNavigate()
  let { decodedData, userData } = useSelector((state) => state.login)


  function logout() {
    localStorage.removeItem('dataToken');
    decodedData = null
    userData = null
    Navigate('/login');
    window.location.reload();


  }
  
  return <>
    <NavBar logout={logout} />


    <Outlet></Outlet>
  </>
}
