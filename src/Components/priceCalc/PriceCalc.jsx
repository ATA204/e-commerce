import React, { useMemo, useState } from 'react'

export default function PriceCalc({ product }) {

    let [finalPrice, setFinalPrice] = useState(0)


    function calcPrices(myprouct) {
        const final = (myprouct?.price - (myprouct?.price * myprouct?.discountPercentage) / 100).toFixed(2)
        setFinalPrice(final)
    }


    useMemo(() => {
        calcPrices(product)
    }, [product])
    return <>
        <p className='text-800 text-sm font-bold'>$ {finalPrice}</p>


    </>
}
