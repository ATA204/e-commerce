import React, { useEffect, useMemo, useState } from "react";
import "./ProductDetails.Module.css";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../Redux/ProductDetailsSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Loading from "../Loading/Loading";
import { FaUser } from "react-icons/fa";
import PriceCalc from "../priceCalc/PriceCalc";
import { addtoCart } from "../../Redux/CartSlice";
import { handleWishlist } from "../../Redux/WishlistSlice";
import ReactStars from "react-stars";

export default function ProductDetails() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "gray",
          borderRadius: "50%",
          color: "black",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;

    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "gray",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false,
          nextArrow: false,
          prevArrow: false,
        },
      },
    ],
  };

  let { id } = useParams();

  let { myProduct, loading } = useSelector((state) => state.productdetails);
  let dispatch = useDispatch();
  let { wishlistItems } = useSelector((state) => state.wishlist);

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {" "}
          <div className="lg:flex max-md:flex-col md:items-center  lg:justify-between  w-10/12 m-auto gap-7 my-5">
            <div className="lg:w-5/12 max-md:w-10/12 flex flex-col justify-around ">
              <div className="shadow-xl rounded-md ">
                {myProduct?.images.length > 1 ? (
                  <Slider className="mb-8" {...settings}>
                    {myProduct?.images.map((image) => (
                      <img
                        src={image}
                        className="w-full m-auto h-80 object-contain "
                        alt="Product Images"
                      />
                    ))}
                  </Slider>
                ) : (
                  <img
                    src={myProduct?.images}
                    className="w-full m-auto h-80 object-contain"
                    alt="Product Images"
                  />
                )}
              </div>
              <div className="flex justify-between my-2 gap-1 w-11/12 m-auto">
                <button
                  onClick={() => dispatch(addtoCart(myProduct))}
                  className=" flex items-center justify-center gap-2 bg-[#198754] text-white px-5 py-2 rounded-md w-9/12 "
                >
                  Add to Cart{" "}
                </button>

                <div
                  className="w-3/12 flex items-center justify-center bg-[#E2E3E5] px-2 py-2 rounded-md cursor-pointer"
                  onClick={() => dispatch(handleWishlist(myProduct))}
                >
                  {wishlistItems.some((item) => item.id == id) ? (
                    <FaHeart className="w-full text-red-600" />
                  ) : (
                    <FaRegHeart className="w-full" />
                  )}
                </div>
              </div>
            </div>
            <div className="lg:w-8/12 max-md:w-10/12 h-full bg-[#F8F9FA] rounded-md p-5">
              <div className="flex flex-col gap-2 my-2">
                <h3 className="font-bold text-3xl ">{myProduct?.title}</h3>
                <div className="flex items-center gap-1">
                  <ReactStars
                    value={myProduct?.rating}
                    edit={false}
                    count={5}
                    size={25}
                  />
                  <div>
                    <h6>{`${myProduct?.reviews.length}reviews`}</h6>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p>{myProduct?.description}</p>
                </div>
                <div>
                  <img
                    className="w-full object-contain h-44"
                    src={myProduct?.meta.qrCode}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex items-center gap-3  py-3 border-t-2 border-b-2 border-gray-300  ">
                <div>
                  <h6 className="text-[#212529]">Brand :</h6>
                </div>
                <div className="font-bold">{myProduct?.brand}</div>
              </div>
              <div className="flex items-center gap-3 border-b-2 border-gray-300 py-3 ">
                <div>
                  <h6 className="text-[#212529]">Price :</h6>
                </div>
                <div className=" flex items-center gap-3 ">
                  <h6 className="text-red-600 line-through">
                    ${myProduct?.price}
                  </h6>
                  <PriceCalc product={myProduct} />
                  <div className="px-3 py-1 rounded-md bg-[#D1E7DD] text-[#198754] font-bold">
                    {myProduct?.discountPercentage}% off
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 border-b-2 border-gray-300 py-3 ">
                <div>
                  <h6 className="text-[#212529]">Shipping :</h6>
                </div>
                <div className="font-bold">
                  {myProduct?.shippingInformation}
                </div>
              </div>
              <div className="flex items-center gap-3 border-b-2 border-gray-300 py-3 ">
                <div>
                  <h6 className="text-[#212529]">Availability :</h6>
                </div>
                <div className="font-bold">{`(${myProduct?.stock}) items Left ${myProduct?.availabilityStatus}  `}</div>
              </div>
              <div className="flex items-center gap-3 border-b-2 border-gray-300 py-3 ">
                <div>
                  <h6 className="text-[#212529]">Category :</h6>
                </div>
                <div className="font-bold">{myProduct?.category}</div>
              </div>
              <div className="flex items-center gap-3 border-b-2 border-gray-300 py-3 ">
                <div>
                  <h6 className="text-[#212529]">Return :</h6>
                </div>
                <div className="font-bold">{myProduct?.returnPolicy}</div>
              </div>
            </div>
          </div>
          <div className="w-10/12 m-auto mb-10 ">
            <h3 className="font-bold text-[#198754] text-4xl mx-10 py-5">
              Reviews :
            </h3>
            <div className="flex justify-center flex-col gap-3  py-3 ">
              {myProduct?.reviews.length > 0 ? (
                myProduct?.reviews.map((review) => (
                  <div className="bg-[#F8F9FA] px-3 py-8 rounded-md shadow-md lg:w-5/12 max-md:w-10/12 max-md:mx-auto border-2 border-gray-300">
                    <div className="flex justify-start items-center gap-3">
                      <div className="w-[40px] h-[40px] rounded-full bg-[#D1E7DD] flex justify-center items-center">
                        <FaUser />
                      </div>

                      <div className=" flex flex-col justify-center">
                        <h4 className="font-bold">{review?.reviewerName}</h4>
                        <p className="text-sm  text-[#6C757D]">
                          {review?.reviewerEmail}
                        </p>
                      </div>
                    </div>

                    <div className="my-5 text-lg font-bold mx-5">
                      {review?.comment}
                    </div>
                    <div className="w-11/12 m-auto flex items-center justify-between">
                      <ReactStars
                        value={review?.rating}
                        edit={false}
                        count={5}
                        size={25}
                      />
                      <div className="text-[#6C757D] text-sm">
                        {review?.date.split(`T0`).slice(0, 1).join(` `)}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <>No Reviews</>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
