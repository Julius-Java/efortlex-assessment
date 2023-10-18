"use client"
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import testImg from "@/public/assets/testProduct.jpg"
// import test from 'node:test'


type ProductDiscountProps = {
  productImg?: StaticImageData,
  productTitle?: string,
  discount?: number
}

// Remove my from parent div
const ProductDiscount = ({productImg, productTitle, discount}: ProductDiscountProps) => {
  return (
    <div
      className='min-h-[250px] border flex flex-col items-center justify-between py-5 my-3 hover:cursor-pointer min-w-[200px] rounded-lg'
    >
      <Image src={testImg} alt={"Product"} loading='lazy' className='w-44 h-36 mx-auto rounded' />
      <h3 className='text-lg font-semibold my-3'>Smart Watches</h3>
      <span className='text-rose-500 font-semibold bg-rose-200 py-2 px-5 rounded-2xl text-sm'>- 25%</span>
    </div>
  )
}

export default ProductDiscount