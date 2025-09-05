import React, { useEffect, useState } from 'react'
import './CategorySlider.Module.css'
import { myCategories } from '../../Redux/categorySlice'
import { useDispatch, useSelector } from 'react-redux'
import Slider from 'react-slick'
import Loading from '../Loading/Loading'
import { Link } from 'react-router-dom'





export default function CategorySlider() {


  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray", borderRadius: "50%", color: "black" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;

    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray", borderRadius: "50%" }}
        onClick={onClick}
      />
    );
  }
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
          nextArrow: false,
          prevArrow: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          nextArrow: false,
          prevArrow: false,
        }
      }
    ]
  };

  let { categories, loading } = useSelector((state) => state.categories)

  let dispatch = useDispatch()


  useEffect(() => {
    dispatch(myCategories())

  }, [])
  return <>
    {loading ? <Loading /> : <>
      <h2 className='font-bold text-[#198754] text-4xl mx-4 py-5'>Categories :</h2>
      <Slider className='w-11/12 m-auto bg-[#d7d7d7] mt-5 mb-10 h-36  px-2 rounded-md after:content-[""] after:absolute  after:left-0 after:w-full after:h-[1.5px] after:top-[130%] after:bg-[#e3e3e4] after:rounded-md after:z-20' {...settings}>
        {categories?.map((category) => <div className=''>
          <Link to={`categorydetails/${category.slug}`}>
            <div className=' m-auto bg-[#F8F9FA] z-30 flex items-center justify-center shadow-2xl my-11 py-2  rounded-xl cursor-pointer'>

              <h3 className=' text-center font-bold text-2xl w-full   '>{category.name}</h3>
            </div>
          </Link>
        </div>)}
      </Slider>
    </>}

  </>
}
