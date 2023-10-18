"use client"
import React from 'react'
import testImg from "@/public/assets/testProduct.jpg"
import Image, { StaticImageData } from 'next/image'

type ProductDiscountProps = {
    productImg?: StaticImageData,
    productTitle?: string,
    discount?: string
}


const ProductBasic = ({productImg, productTitle, discount}: ProductDiscountProps) => {
    return (
        <div
            className='min-h-[250px] border flex flex-col items-center justify-between py-5 my-3 hover:cursor-pointer min-w-[200px] rounded-lg'
        >
            <Image src={testImg} alt='Product' loading='lazy' className='w-44 h-36 mx-auto rounded' />
            <h3 className='text-lg font-semibold my-3'>Smart Watches</h3>
            <span className='text-sm text-gray-600'>from USD 19</span>
        </div>
    )
}

export default ProductBasic