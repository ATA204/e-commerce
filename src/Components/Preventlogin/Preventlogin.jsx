import React from 'react'
import { Navigate } from 'react-router-dom'


export default function Preventlogin(props) {

  if (localStorage.getItem("dataToken") !== null) {
    return  <Navigate to='/'/>

  }
  else{
    return <>{props.children}</>
  }

}
