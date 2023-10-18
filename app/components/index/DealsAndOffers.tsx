import React from 'react'
import DealsTimer from "./DealsTimer"
import ProductDiscount from '../shared/ProductDiscount'

const DealsAndOffers = () => {
    return (
        <section className='py-3 lg:flex lg:items-center lg:gap-3'>
            <div className='flex items-center gap-3 xs:justify-between lg:flex-col lg:justify-center lg:items-start lg:h-[250px] lg:border lg:py-5 lg:my-3 lg:px-3'>
                <h3 className='font-bold text-lg'>Deals and Offers <span className='block font-normal text-base'>Electronic equipments</span></h3>
                <DealsTimer />
            </div>
            <div className='overflow-x-auto flex gap-5 py-5'>
                <ProductDiscount />
                <ProductDiscount />
                <ProductDiscount />
                <ProductDiscount />
                <ProductDiscount />
                <ProductDiscount />
                <ProductDiscount />
                <ProductDiscount />
                <ProductDiscount />
                <ProductDiscount />
                <ProductDiscount />
            </div>
        </section>
    )
}

export default DealsAndOffers