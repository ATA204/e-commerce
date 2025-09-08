import React from 'react'
import { CiStar } from "react-icons/ci";
import ReactStars from 'react-stars'



export default function Stars() {


  return <>
    <ReactStars
      count={5}
      size={30}
      color2={'#ffd700'}
      edit={false}
       />

  </>
}
